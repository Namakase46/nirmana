import { ref, reactive, computed, watch, nextTick } from 'vue'

export function use2DGrid(boardSettings, selectedNailHeight, selectedNailWidth, nailWidthOptions) {
  // Viewport and interaction state
  const scale = ref(1)
  const xOffset = ref(0)
  const yOffset = ref(0)
  const isDragging = ref(false)

  // Grid data - using coordinate-based structure
  const nails = ref({})

  // Helper function to get nail at position
  const getNailAt = (x, y) => {
    const key = `${x},${y}`
    return nails.value[key] || null
  }

  // Helper function to set nail at position
  const setNailAt = (x, y, nailData) => {
    const key = `${x},${y}`
    if (nailData) {
      nails.value[key] = nailData
    } else {
      delete nails.value[key]
    }
  }

  // Helper function to convert width number to width type
  const getWidthTypeFromNumber = (width) => {
    switch (width) {
      case 1: return 'thin'
      case 2: return 'medium'
      case 3: return 'thick'
      default: return 'thin'
    }
  }

  // Helper function to convert width type to number
  const getWidthNumberFromType = (widthType) => {
    switch (widthType) {
      case 'thin': return 1
      case 'medium': return 2
      case 'thick': return 3
      default: return 1
    }
  }

  // Helper function to get color from width number
  const getColorFromWidth = (width) => {
    const widthType = getWidthTypeFromNumber(width)
    const widthOption = nailWidthOptions.find(w => w.id === widthType)
    return widthOption?.color || '#ef4444'
  }

  // Helper function to get label from width number
  const getLabelFromWidth = (width) => {
    const widthType = getWidthTypeFromNumber(width)
    const widthOption = nailWidthOptions.find(w => w.id === widthType)
    return widthOption?.label || 'Thin (Red)'
  }

  // Helper function to darken color for border
  const adjustBorderColor = (color) => {
    // Convert hex to RGB
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)

    // Darken by 30%
    const darkenedR = Math.max(0, Math.floor(r * 0.7))
    const darkenedG = Math.max(0, Math.floor(g * 0.7))
    const darkenedB = Math.max(0, Math.floor(b * 0.7))

    // Convert back to hex
    return `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`
  }

  // Computed properties
  const zoomPercentage = computed(() => Math.round(scale.value * 100))

  const gridStyles = computed(() => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${boardSettings.dotsCountHorizontal}, 1fr)`,
    gridTemplateRows: `repeat(${boardSettings.dotsCountVertical}, 1fr)`,
    gap: `${boardSettings.marginBetweenNails}px`,
    padding: `${boardSettings.paddingBoard}px`,
    backgroundColor: boardSettings.boardColor || '#8B4513',
    border: `4px solid ${adjustBorderColor(boardSettings.boardColor || '#8B4513')}`,
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    position: 'relative'
  }))

  const boardDimensions = computed(() => {
    const nailSize = 20 // Base nail size
    const totalWidth = (boardSettings.dotsCountHorizontal * nailSize) +
      ((boardSettings.dotsCountHorizontal - 1) * boardSettings.marginBetweenNails) +
      (boardSettings.paddingBoard * 2)
    const totalHeight = (boardSettings.dotsCountVertical * nailSize) +
      ((boardSettings.dotsCountVertical - 1) * boardSettings.marginBetweenNails) +
      (boardSettings.paddingBoard * 2)

    return { width: totalWidth, height: totalHeight }
  })

  // Initialize grid data
  const initializeGrid = () => {
    nails.value = {}
    // Initialize empty grid - nails will be added dynamically when placed
  }

  // Generate the grid DOM
  const generateGrid = () => {
    const container = document.getElementById('grid-container')
    if (!container) return

    // Clear existing content
    container.innerHTML = ''

    // Create the main board container
    const boardElement = document.createElement('div')
    boardElement.className = 'mdf-board'

    // Apply CSS Grid styles
    Object.assign(boardElement.style, gridStyles.value)

    // Create nail slots for each position
    for (let row = 0; row < boardSettings.dotsCountVertical; row++) {
      for (let col = 0; col < boardSettings.dotsCountHorizontal; col++) {
        const nailElement = document.createElement('div')
        nailElement.className = 'nail-slot'
        nailElement.dataset.x = col
        nailElement.dataset.y = row
        nailElement.dataset.position = `${col},${row}`

        // Base nail slot styling
        nailElement.style.cssText = `
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #666666;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          color: white;
          font-weight: bold;
          font-size: 10px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        `

        // Check if there's a nail at this position
        const nail = getNailAt(col, row)
        if (nail) {
          updateNailVisual(nailElement, nail)
        }

        // Add hover effect for empty slots
        nailElement.addEventListener('mouseenter', () => {
          if (!getNailAt(col, row)) {
            nailElement.style.transform = 'scale(1.1)'
            nailElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3), 0 0 8px rgba(99, 102, 241, 0.4)'
          }
        })

        nailElement.addEventListener('mouseleave', () => {
          if (!getNailAt(col, row)) {
            nailElement.style.transform = 'scale(1)'
            nailElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)'
          }
        })

        // Add click handler
        nailElement.addEventListener('click', () => addNailAtPosition(col, row))

        // Add right-click handler for removal
        nailElement.addEventListener('contextmenu', (e) => {
          e.preventDefault()
          removeNailAtPosition(col, row)
        })

        boardElement.appendChild(nailElement)
      }
    }

    container.appendChild(boardElement)
    updateTransform()
  }

  // Add nail at position (with toggle functionality)
  const addNailAtPosition = (x, y) => {
    if (selectedNailHeight.value === 0) {
      return // No height selected
    }

    const selectedWidthNumber = getWidthNumberFromType(selectedNailWidth.value)
    const existingNail = getNailAt(x, y)

    // Check if nail already exists with same height and width - if so, remove it (toggle)
    if (existingNail &&
      existingNail.height === selectedNailHeight.value &&
      existingNail.width === selectedWidthNumber) {
      // Remove the nail (toggle off)
      removeNailAtPosition(x, y)
      return
    }

    // Create new nail data with numeric width
    const nailData = {
      height: selectedNailHeight.value,
      width: selectedWidthNumber // Store as number instead of string
    }

    // Set nail at position
    setNailAt(x, y, nailData)

    // Update visual representation
    const nailElement = document.querySelector(`[data-position="${x},${y}"]`)
    if (nailElement) {
      updateNailVisual(nailElement, nailData)
    }
  }

  // Update nail visual appearance
  const updateNailVisual = (nailElement, nail) => {
    if (!nailElement) return

    if (nail && nail.height > 0) {
      // Derive color and label from numeric width
      const color = getColorFromWidth(nail.width)
      const label = getLabelFromWidth(nail.width)

      // Show nail with height number and color
      nailElement.style.backgroundColor = color
      nailElement.style.color = '#ffffff'
      nailElement.style.fontWeight = 'bold'
      nailElement.style.fontSize = '10px'
      nailElement.style.textShadow = '0 1px 2px rgba(0,0,0,0.8)'
      nailElement.innerHTML = nail.height.toString()
      nailElement.style.cursor = 'pointer'
      nailElement.title = `Height: ${nail.height}, Width: ${label}\nClick with same settings to remove\nRight-click to remove`
    } else {
      // Reset to empty slot
      nailElement.style.backgroundColor = '#666666'
      nailElement.style.color = 'white'
      nailElement.innerHTML = ''
      nailElement.title = 'Click to add nail'
    }
  }

  // Remove nail at position
  const removeNailAtPosition = (x, y) => {
    setNailAt(x, y, null) // Remove nail from data structure

    const nailElement = document.querySelector(`[data-position="${x},${y}"]`)
    if (nailElement) {
      updateNailVisual(nailElement, null)
    }
  }

  // Clear all nails
  const clearAllNails = () => {
    nails.value = {} // Clear all nails from data structure

    // Update all visual elements
    const nailElements = document.querySelectorAll('.nail-slot')
    nailElements.forEach(element => {
      updateNailVisual(element, null)
    })
  }

  // Viewport controls
  const resetView = () => {
    scale.value = 1
    xOffset.value = 0
    yOffset.value = 0
    updateTransform()
  }

  const updateTransform = () => {
    const container = document.getElementById('grid-container')
    if (container) {
      container.style.transform = `translate(${xOffset.value}px, ${yOffset.value}px) scale(${scale.value})`
      container.style.transformOrigin = 'center center'
    }
  }

  // Save/Load functionality with improved data structure
  const saveGrid = () => {
    const gridState = {
      // Metadata
      timestamp: new Date().toISOString(),

      // Board Configuration
      boardConfig: {
        dimensions: {
          dotsCountHorizontal: boardSettings.dotsCountHorizontal,
          dotsCountVertical: boardSettings.dotsCountVertical,
          marginBetweenNails: boardSettings.marginBetweenNails,
          paddingBoard: boardSettings.paddingBoard
        },
        appearance: {
          boardColor: boardSettings.boardColor
        }
      },

      // Nail Types (for reference)
      nailTypes: nailWidthOptions.reduce((acc, option) => {
        acc[option.id] = {
          id: option.id,
          label: option.label,
          color: option.color,
          width: option.id === 'thin' ? 1 : option.id === 'medium' ? 2 : 3
        }
        return acc
      }, {}),

      // Nails data - already in the correct coordinate-based format
      nails: Object.fromEntries(
        Object.entries(nails.value).map(([positionKey, nail]) => [
          positionKey,
          {
            height: nail.height,
            width: nail.width // Now using numeric width
          }
        ])
      ),

      // View state
      viewState: {
        scale: scale.value,
        xOffset: xOffset.value,
        yOffset: yOffset.value
      }
    }

    localStorage.setItem('nirmana-grid-state', JSON.stringify(gridState))

    // Console log the complete data structure for backend database
    console.log('🎯 BACKEND DATABASE STRUCTURE - Complete Grid State:')
    console.log('='.repeat(60))
    console.log(JSON.stringify(gridState, null, 2))

    // Console log optimized structure for backend database (normalized columns)
    const backendOptimized = {
      // Database columns mapping:
      id: null,          // Auto-generated by database
      user_id: null,     // To be assigned by backend
      project_name: `MDF Grid ${new Date().toLocaleDateString()}`,

      // board_config JSONB column
      board_config: {
        dimensions: {
          dotsCountHorizontal: gridState.boardConfig.dimensions.dotsCountHorizontal,
          dotsCountVertical: gridState.boardConfig.dimensions.dotsCountVertical,
          marginBetweenNails: gridState.boardConfig.dimensions.marginBetweenNails,
          paddingBoard: gridState.boardConfig.dimensions.paddingBoard
        },
        appearance: {
          boardColor: gridState.boardConfig.appearance.boardColor
        }
      },

      // nails JSONB column (position-based, optimized)
      nails: Object.fromEntries(
        Object.entries(gridState.nails).map(([positionKey, nail]) => [
          positionKey,
          {
            height: nail.height,
            width: nail.width
          }
        ])
      ),

      // view_state JSONB column (optional, can be null)
      view_state: {
        scale: gridState.viewState.scale,
        xOffset: gridState.viewState.xOffset,
        yOffset: gridState.viewState.yOffset
      },

      // Timestamps handled by database
      created_at: null, // Will be set by database DEFAULT CURRENT_TIMESTAMP
      updated_at: null  // Will be set by database DEFAULT CURRENT_TIMESTAMP
    }

    console.log('✅ Grid saved successfully to localStorage')

    return {
      fullState: gridState,
      backendOptimized: backendOptimized,
      nailCount: Object.keys(gridState.nails).length
    }
  }

  const loadGrid = () => {
    const saved = localStorage.getItem('nirmana-grid-state')
    if (saved) {
      try {
        const gridState = JSON.parse(saved)        // Handle legacy format (backwards compatibility)
        if (gridState.nails && !gridState.timestamp && Array.isArray(gridState.nails)) {
          console.log('Loading legacy grid format - converting to coordinate-based structure')
          nails.value = {}

          gridState.nails.forEach(nail => {
            if (nail.height > 0) {
              const key = `${nail.x},${nail.y}`
              // Convert legacy widthType to numeric width
              const width = nail.widthType ? getWidthNumberFromType(nail.widthType) : 1
              nails.value[key] = {
                height: nail.height,
                width: width // Convert to numeric width
              }
            }
          })

          if (gridState.boardSettings) {
            Object.assign(boardSettings, gridState.boardSettings)
          }
        } else if (gridState.timestamp) {
          console.log('Loading enhanced grid format from ' + gridState.timestamp)

          // Load board configuration
          if (gridState.boardConfig) {
            Object.assign(boardSettings, {
              ...gridState.boardConfig.dimensions,
              ...gridState.boardConfig.appearance
            })
          }          // Load nails - already in coordinate-based format
          if (gridState.nails) {
            nails.value = {}

            Object.entries(gridState.nails).forEach(([positionKey, nail]) => {
              // Handle both new simplified structure and legacy structure
              let height, width

              if (nail.properties) {
                // Legacy structure with properties wrapper
                height = nail.properties.height
                width = nail.properties.width
              } else {
                // New simplified structure
                height = nail.height
                width = nail.width
              }

              // Handle both numeric width and legacy string width
              if (typeof width === 'string') {
                // Convert legacy string width to numeric
                width = getWidthNumberFromType(width)
              }

              nails.value[positionKey] = {
                height: height,
                width: width // Store as numeric width
              }
            })
          }

          // Load view state
          if (gridState.viewState) {
            scale.value = gridState.viewState.scale || 1
            xOffset.value = gridState.viewState.xOffset || 0
            yOffset.value = gridState.viewState.yOffset || 0
          }
        }

        // Update visuals after loading
        nextTick(() => {
          generateGrid() // Regenerate grid with loaded data
          updateTransform()
        })

      } catch (error) {
        console.error('Failed to load grid state:', error)
      }
    }
  }

  // Export grid data as JSON (for sharing/backup)
  const exportGrid = () => {
    const gridState = {
      timestamp: new Date().toISOString(),
      boardConfig: {
        dimensions: {
          dotsCountHorizontal: boardSettings.dotsCountHorizontal,
          dotsCountVertical: boardSettings.dotsCountVertical,
          marginBetweenNails: boardSettings.marginBetweenNails,
          paddingBoard: boardSettings.paddingBoard
        },
        appearance: {
          boardColor: boardSettings.boardColor
        }
      },
      nailTypes: nailWidthOptions.reduce((acc, option) => {
        acc[option.id] = {
          id: option.id,
          label: option.label,
          color: option.color,
          width: option.id === 'thin' ? 1 : option.id === 'medium' ? 2 : 3
        }
        return acc
      }, {}),
      nails: Object.fromEntries(
        Object.entries(nails.value).map(([positionKey, nail]) => [
          positionKey,
          {
            height: nail.height,
            width: nail.width // Using numeric width
          }
        ])
      )
    }

    const dataStr = JSON.stringify(gridState, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)

    const link = document.createElement('a')
    link.href = url
    link.download = `nirmana-grid-${new Date().toISOString().slice(0, 10)}.json`
    link.click()

    URL.revokeObjectURL(url)
  }

  // Import grid data from JSON file
  const importGrid = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const gridState = JSON.parse(e.target.result)

          // Validate the imported data structure
          if (!gridState.timestamp || !gridState.boardConfig || !gridState.nails) {
            throw new Error('Invalid grid file format')
          }

          // Load the imported data
          Object.assign(boardSettings, {
            ...gridState.boardConfig.dimensions,
            ...gridState.boardConfig.appearance
          })

          // Load nails with coordinate-based structure
          if (gridState.nails) {
            nails.value = {}

            Object.entries(gridState.nails).forEach(([positionKey, nail]) => {
              // Handle both new simplified structure and legacy structure
              let height, width

              if (nail.properties) {
                // Legacy structure with properties wrapper
                height = nail.properties.height
                width = nail.properties.width
              } else {
                // New simplified structure
                height = nail.height
                width = nail.width
              }

              // Handle both numeric width and legacy string width
              if (typeof width === 'string') {
                // Convert legacy string width to numeric
                width = getWidthNumberFromType(width)
              }

              nails.value[positionKey] = {
                height: height,
                width: width // Store as numeric width
              }
            })
          }

          // Load view state if available
          if (gridState.viewState) {
            scale.value = gridState.viewState.scale || 1
            xOffset.value = gridState.viewState.xOffset || 0
            yOffset.value = gridState.viewState.yOffset || 0
          }

          nextTick(() => {
            generateGrid()
            updateTransform()
          })

          resolve(gridState)
        } catch (error) {
          reject(error)
        }
      }
      reader.readAsText(file)
    })
  }

  // Watch for board settings changes and regenerate grid
  watch(
    () => [
      boardSettings.dotsCountHorizontal,
      boardSettings.dotsCountVertical,
      boardSettings.marginBetweenNails,
      boardSettings.paddingBoard,
      boardSettings.boardColor
    ],
    (newValues, oldValues) => {
      // Only reset nails if grid dimensions changed
      const dimensionsChanged = oldValues && (
        newValues[0] !== oldValues[0] || // dotsCountHorizontal
        newValues[1] !== oldValues[1]    // dotsCountVertical
      )

      if (dimensionsChanged) {
        // Grid size changed - need to clear nails that might be out of bounds
        initializeGrid()
      }

      // Always regenerate the visual grid (preserves nails if no dimensions change)
      nextTick(() => {
        generateGrid()
      })
    }
  )

  // Initialize
  initializeGrid()

  return {
    // State
    scale,
    xOffset,
    yOffset,
    isDragging,
    nails,

    // Computed
    zoomPercentage,
    gridStyles,
    boardDimensions,

    // Methods
    generateGrid,
    clearAllNails,
    resetView,
    updateTransform,
    saveGrid,
    loadGrid,
    exportGrid,
    importGrid,
    initializeGrid
  }
}
