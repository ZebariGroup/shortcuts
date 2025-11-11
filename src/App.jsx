import { useState, useMemo, useEffect, useRef } from 'react'
import { shortcuts } from './data/shortcuts'
import './App.css'

const COLUMNS = {
  name: { label: 'Name', visible: true, minWidth: 100 },
  keys: { label: 'Keys', visible: true, minWidth: 120 },
  description: { label: 'Description', visible: true, minWidth: 200 },
  category: { label: 'Category', visible: true, minWidth: 100 },
  platform: { label: 'Platform', visible: true, minWidth: 100 }
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortColumn, setSortColumn] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')
  const [visibleColumns, setVisibleColumns] = useState(COLUMNS)
  const [showColumnMenu, setShowColumnMenu] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const columnMenuRef = useRef(null)
  const tableRef = useRef(null)
  const [columnWidths, setColumnWidths] = useState({
    name: 150,
    keys: 180,
    description: 300,
    category: 120,
    platform: 120
  })
  const [resizingColumn, setResizingColumn] = useState(null)
  const [resizeStartX, setResizeStartX] = useState(0)
  const [resizeStartWidth, setResizeStartWidth] = useState(0)

  const categories = ['all', ...new Set(shortcuts.map(s => s.category))].sort()

  // Close column menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (columnMenuRef.current && !columnMenuRef.current.contains(event.target)) {
        setShowColumnMenu(false)
      }
    }

    if (showColumnMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showColumnMenu])

  // Handle column resizing
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (resizingColumn) {
        const diff = e.clientX - resizeStartX
        const newWidth = Math.max(
          visibleColumns[resizingColumn].minWidth,
          resizeStartWidth + diff
        )
        setColumnWidths(prev => ({
          ...prev,
          [resizingColumn]: newWidth
        }))
      }
    }

    const handleMouseUp = () => {
      setResizingColumn(null)
    }

    if (resizingColumn) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [resizingColumn, resizeStartX, resizeStartWidth, visibleColumns])

  const startResize = (column, e) => {
    e.stopPropagation()
    setResizingColumn(column)
    setResizeStartX(e.clientX)
    setResizeStartWidth(columnWidths[column])
  }

  const autoFitColumns = () => {
    if (!tableRef.current) return

    const table = tableRef.current
    const visibleCols = Object.entries(visibleColumns).filter(([_, col]) => col.visible)
    const totalVisibleCols = visibleCols.length + 1 // +1 for action column
    
    // Get table width minus action column
    const actionColWidth = 60
    const availableWidth = table.offsetWidth - actionColWidth
    
    // Calculate optimal widths based on content
    const newWidths = {}
    visibleCols.forEach(([key, col]) => {
      // Sample some cells to estimate content width
      const sampleSize = Math.min(10, filteredShortcuts.length)
      let maxContentWidth = col.minWidth
      
      for (let i = 0; i < sampleSize; i++) {
        const shortcut = filteredShortcuts[i]
        let contentWidth = 0
        
        if (key === 'name') {
          contentWidth = (shortcut.name?.length || 0) * 8 + 20
        } else if (key === 'keys') {
          contentWidth = shortcut.keys.join(' + ').length * 7 + 30
        } else if (key === 'description') {
          contentWidth = (shortcut.description?.length || 0) * 6 + 20
        } else if (key === 'category') {
          contentWidth = (shortcut.category?.length || 0) * 8 + 20
        } else if (key === 'platform') {
          contentWidth = (shortcut.platform?.length || 0) * 8 + 20
        }
        
        maxContentWidth = Math.max(maxContentWidth, contentWidth)
      }
      
      newWidths[key] = Math.max(col.minWidth, Math.min(maxContentWidth, availableWidth / totalVisibleCols * 1.5))
    })
    
    setColumnWidths(prev => ({ ...prev, ...newWidths }))
  }

  const filteredShortcuts = useMemo(() => {
    let filtered = shortcuts.filter(shortcut => {
      const matchesCategory = selectedCategory === 'all' || shortcut.category === selectedCategory
      
      return matchesCategory
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
  }, [selectedCategory, sortColumn, sortDirection])

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

  const visibleCols = Object.entries(visibleColumns).filter(([_, col]) => col.visible)
  const totalWidth = visibleCols.reduce((sum, [key]) => sum + columnWidths[key], 0) + 60

  return (
    <div className="app">
      <header className="header">
        <h1>⌨️ Shortcuts Reference</h1>
        <p className="subtitle">{shortcuts.length} shortcuts across {new Set(shortcuts.map(s => s.platform)).size} products</p>
      </header>

      <div className="controls">
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
        <div className="column-menu-container" ref={columnMenuRef}>
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
        <button
          onClick={autoFitColumns}
          className="auto-fit-btn"
          title="Auto-fit columns to content"
        >
          📐 Auto-fit
        </button>
      </div>

      {filteredShortcuts.length === 0 ? (
        <div className="no-results">
          No shortcuts found. Try a different product.
        </div>
      ) : (
        <div className="table-wrapper">
          <div className="table-container" ref={tableRef}>
            <table 
              className="shortcuts-table"
              style={{ width: `${totalWidth}px`, margin: '0 auto' }}
            >
              <thead>
                <tr>
                  {visibleColumns.name.visible && (
                    <th 
                      className="sortable resizable"
                      style={{ width: `${columnWidths.name}px` }}
                      onClick={() => handleSort('name')}
                    >
                      <div className="th-content">
                        Name {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </div>
                      <div 
                        className="resize-handle"
                        onMouseDown={(e) => startResize('name', e)}
                      />
                    </th>
                  )}
                  {visibleColumns.keys.visible && (
                    <th 
                      className="sortable resizable"
                      style={{ width: `${columnWidths.keys}px` }}
                      onClick={() => handleSort('keys')}
                    >
                      <div className="th-content">
                        Keys {sortColumn === 'keys' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </div>
                      <div 
                        className="resize-handle"
                        onMouseDown={(e) => startResize('keys', e)}
                      />
                    </th>
                  )}
                  {visibleColumns.description.visible && (
                    <th 
                      className="sortable resizable"
                      style={{ width: `${columnWidths.description}px` }}
                      onClick={() => handleSort('description')}
                    >
                      <div className="th-content">
                        Description {sortColumn === 'description' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </div>
                      <div 
                        className="resize-handle"
                        onMouseDown={(e) => startResize('description', e)}
                      />
                    </th>
                  )}
                  {visibleColumns.category.visible && (
                    <th 
                      className="sortable resizable"
                      style={{ width: `${columnWidths.category}px` }}
                      onClick={() => handleSort('category')}
                    >
                      <div className="th-content">
                        Category {sortColumn === 'category' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </div>
                      <div 
                        className="resize-handle"
                        onMouseDown={(e) => startResize('category', e)}
                      />
                    </th>
                  )}
                  {visibleColumns.platform.visible && (
                    <th 
                      className="sortable resizable"
                      style={{ width: `${columnWidths.platform}px` }}
                      onClick={() => handleSort('platform')}
                    >
                      <div className="th-content">
                        Platform {sortColumn === 'platform' && (sortDirection === 'asc' ? '↑' : '↓')}
                      </div>
                      <div 
                        className="resize-handle"
                        onMouseDown={(e) => startResize('platform', e)}
                      />
                    </th>
                  )}
                  <th className="action-col" style={{ width: '60px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredShortcuts.map((shortcut, index) => (
                  <tr key={index}>
                    {visibleColumns.name.visible && (
                      <td className="name-cell" style={{ width: `${columnWidths.name}px` }}>{shortcut.name}</td>
                    )}
                    {visibleColumns.keys.visible && (
                      <td className="keys-cell" style={{ width: `${columnWidths.keys}px` }}>
                        {shortcut.keys.map((key, idx) => (
                          <span key={idx} className="key">
                            {key}
                          </span>
                        ))}
                      </td>
                    )}
                    {visibleColumns.description.visible && (
                      <td className="description-cell" style={{ width: `${columnWidths.description}px` }}>{shortcut.description}</td>
                    )}
                    {visibleColumns.category.visible && (
                      <td className="category-cell" style={{ width: `${columnWidths.category}px` }}>{shortcut.category}</td>
                    )}
                    {visibleColumns.platform.visible && (
                      <td className="platform-cell" style={{ width: `${columnWidths.platform}px` }}>{shortcut.platform || '-'}</td>
                    )}
                    <td className="action-cell" style={{ width: '60px' }}>
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
        </div>
      )}

      <footer className="footer">
        Showing {filteredShortcuts.length} of {shortcuts.length} shortcuts
      </footer>
    </div>
  )
}

export default App
