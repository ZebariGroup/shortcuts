import { useState, useMemo } from 'react'
import { shortcuts } from './data/shortcuts'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(shortcuts.map(s => s.category))]

  const filteredShortcuts = useMemo(() => {
    return shortcuts.filter(shortcut => {
      const matchesSearch = 
        shortcut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.keys.some(key => key.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || shortcut.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="app">
      <header className="header">
        <h1>⌨️ Shortcuts Reference</h1>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filteredShortcuts.length === 0 ? (
        <div className="no-results">
          No shortcuts found.
        </div>
      ) : (
        <table className="shortcuts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Keys</th>
              <th>Description</th>
              <th>Category</th>
              <th>Platform</th>
            </tr>
          </thead>
          <tbody>
            {filteredShortcuts.map((shortcut, index) => (
              <tr key={index}>
                <td className="name-cell">{shortcut.name}</td>
                <td className="keys-cell">
                  {shortcut.keys.map((key, idx) => (
                    <span key={idx} className="key">
                      {key}
                    </span>
                  ))}
                </td>
                <td className="description-cell">{shortcut.description}</td>
                <td className="category-cell">{shortcut.category}</td>
                <td className="platform-cell">{shortcut.platform || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <footer className="footer">
        {filteredShortcuts.length} / {shortcuts.length}
      </footer>
    </div>
  )
}

export default App
