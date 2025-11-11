import { useState, useMemo } from 'react'
import { shortcuts } from './data/shortcuts'
import './App.css'

const COLUMNS = {
  name: { label: 'Name', visible: true },
  keys: { label: 'Keys', visible: true },
  description: { label: 'Description', visible: true },
  category: { label: 'Category', visible: true },
  platform: { label: 'Platform', visible: true }
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortColumn, setSortColumn] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')
  const [visibleColumns, setVisibleColumns] = useState(COLUMNS)
  const [showColumnMenu, setShowColumnMenu] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const categories = ['all', ...new Set(shortcuts.map(s => s.category))].sort()

  const filteredShortcuts = useMemo(() => {
    let filtered = shortcuts.filter(shortcut => {
      const matchesSearch = 
        shortcut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.keys.some(key => key.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || shortcut.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort
    filtered.sort((a, b) => {
      let aVal, bVal
      if (sortColumn === 'keys') {
        aVal = a.keys.join('+')
        bVal = b.keys.join('+')
      } else {
        aVal = a[sortColumn] || ''
        bVal = b[sortColumn] || ''
      }
      
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase()
        bVal = bVal.toLowerCase()
      }
      
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    return filtered
  }, [searchQuery, selectedCategory, sortColumn, sortDirection])

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const toggleColumn = (column) => {
    setVisibleColumns(prev => ({
      ...prev,
      [column]: { ...prev[column], visible: !prev[column].visible }
    }))
  }

  const copyShortcut = (shortcut, index) => {
    const keysText = shortcut.keys.join(' + ')
    navigator.clipboard.writeText(keysText)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const getPlatformName = (category) => {
    const platforms = shortcuts
      .filter(s => s.category === category)
      .map(s => s.platform)
    return [...new Set(platforms)][0] || category
  }

  return (
    <div className="app">
      <header className="header">
        <h1>⌨️ Shortcuts Reference</h1>
        <p className="subtitle">{shortcuts.length} shortcuts across {new Set(shortcuts.map(s => s.platform)).size} products</p>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search shortcuts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="all">All Products</option>
          {categories.filter(c => c !== 'all').map(category => (
            <option key={category} value={category}>
              {getPlatformName(category)}
            </option>
          ))}
        </select>
        <div className="column-menu-container">
          <button
            onClick={() => setShowColumnMenu(!showColumnMenu)}
            className="column-toggle-btn"
            title="Customize columns"
          >
            ⚙️ Columns
          </button>
          {showColumnMenu && (
            <div className="column-menu">
              {Object.entries(visibleColumns).map(([key, col]) => (
                <label key={key} className="column-checkbox">
                  <input
                    type="checkbox"
                    checked={col.visible}
                    onChange={() => toggleColumn(key)}
                  />
                  {col.label}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {filteredShortcuts.length === 0 ? (
        <div className="no-results">
          No shortcuts found. Try a different search term or product.
        </div>
      ) : (
        <div className="table-container">
          <table className="shortcuts-table">
            <thead>
              <tr>
                {visibleColumns.name.visible && (
                  <th 
                    className="sortable"
                    onClick={() => handleSort('name')}
                  >
                    Name {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                )}
                {visibleColumns.keys.visible && (
                  <th 
                    className="sortable"
                    onClick={() => handleSort('keys')}
                  >
                    Keys {sortColumn === 'keys' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                )}
                {visibleColumns.description.visible && (
                  <th 
                    className="sortable"
                    onClick={() => handleSort('description')}
                  >
                    Description {sortColumn === 'description' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                )}
                {visibleColumns.category.visible && (
                  <th 
                    className="sortable"
                    onClick={() => handleSort('category')}
                  >
                    Category {sortColumn === 'category' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                )}
                {visibleColumns.platform.visible && (
                  <th 
                    className="sortable"
                    onClick={() => handleSort('platform')}
                  >
                    Platform {sortColumn === 'platform' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                )}
                <th className="action-col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredShortcuts.map((shortcut, index) => (
                <tr key={index}>
                  {visibleColumns.name.visible && (
                    <td className="name-cell">{shortcut.name}</td>
                  )}
                  {visibleColumns.keys.visible && (
                    <td className="keys-cell">
                      {shortcut.keys.map((key, idx) => (
                        <span key={idx} className="key">
                          {key}
                        </span>
                      ))}
                    </td>
                  )}
                  {visibleColumns.description.visible && (
                    <td className="description-cell">{shortcut.description}</td>
                  )}
                  {visibleColumns.category.visible && (
                    <td className="category-cell">{shortcut.category}</td>
                  )}
                  {visibleColumns.platform.visible && (
                    <td className="platform-cell">{shortcut.platform || '-'}</td>
                  )}
                  <td className="action-cell">
                    <button
                      onClick={() => copyShortcut(shortcut, index)}
                      className="copy-btn"
                      title="Copy shortcut keys"
                    >
                      {copiedIndex === index ? '✓' : '📋'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <footer className="footer">
        Showing {filteredShortcuts.length} of {shortcuts.length} shortcuts
      </footer>
    </div>
  )
}

export default App
