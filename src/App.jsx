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
        <p className="subtitle">Your central source for keyboard shortcuts across all major OS, apps, and browsers</p>
      </header>

      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search shortcuts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

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

      <div className="shortcuts-grid">
        {filteredShortcuts.map((shortcut, index) => (
          <ShortcutCard key={index} shortcut={shortcut} />
        ))}
      </div>

      {filteredShortcuts.length === 0 && (
        <div className="no-results">
          <p>No shortcuts found. Try a different search term or category.</p>
        </div>
      )}

      <footer className="footer">
        <p>Total shortcuts: {shortcuts.length} | Showing: {filteredShortcuts.length}</p>
      </footer>
    </div>
  )
}

function ShortcutCard({ shortcut }) {
  return (
    <div className="shortcut-card">
      <div className="shortcut-header">
        <h3>{shortcut.name}</h3>
        <span className="category-badge">{shortcut.category}</span>
      </div>
      <p className="shortcut-description">{shortcut.description}</p>
      <div className="shortcut-keys">
        {shortcut.keys.map((key, idx) => (
          <span key={idx} className="key">
            {key}
          </span>
        ))}
      </div>
      {shortcut.platform && (
        <div className="shortcut-platform">
          <span className="platform-label">Platform:</span> {shortcut.platform}
        </div>
      )}
    </div>
  )
}

export default App

