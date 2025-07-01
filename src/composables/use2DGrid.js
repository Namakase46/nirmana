import { ref, reactive, computed, nextTick } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export function use2DGrid() {
  // State
  const scale = ref(1)
  const xOffset = ref(0)
  const yOffset = ref(0)
  const isDragging = ref(false)
  const selectedColor = ref('red')
  const currentTool = ref('pencil')
  const customColor = ref('#6366f1')
  const isControlsCollapsed = useLocalStorage('controls-collapsed', false)

  const gridState = reactive({
    width: 800,
    height: 800,
    margin: 40,
    spacing: 25,
    dotNumber: 9
  })

  const dots = ref([])
  const dotState = useLocalStorage('nirmana-dot-state', {})

  // Computed
  const countX = computed(() => Math.floor(gridState.width / gridState.spacing))
  const countY = computed(() => Math.floor(gridState.height / gridState.spacing))
  const actualGridWidth = computed(() => (countX.value - 1) * gridState.spacing)
  const actualGridHeight = computed(() => (countY.value - 1) * gridState.spacing)
  const gridSizeX = computed(() => actualGridWidth.value + 2 * gridState.margin)
  const gridSizeY = computed(() => actualGridHeight.value + 2 * gridState.margin)
  const zoomPercentage = computed(() => Math.round(scale.value * 100))

  // Methods
  const generateGrid = () => {
    dots.value = []
    const container = document.getElementById('grid-container')
    if (!container) return

    // Clear existing grid
    container.innerHTML = ''

    // Create grid container
    const gridDiv = document.createElement('div')
    gridDiv.className = 'grid-container relative border-2 border-gray-800 dark:border-gray-600'

    // Set container dimensions to exactly fit the grid with margins
    gridDiv.style.width = `${gridSizeX.value}px`
    gridDiv.style.height = `${gridSizeY.value}px`

    // Generate dots
    for (let y = 0; y < countY.value; y++) {
      for (let x = 0; x < countX.value; x++) {
        // Position dots with equal spacing and equal margins on all sides
        const dotX = gridState.margin + (x * gridState.spacing)
        const dotY = gridState.margin + (y * gridState.spacing)

        const dot = {
          id: `${x}-${y}`,
          x: dotX,
          y: dotY,
          colorClass: '',
          number: gridState.dotNumber,
          index: y * countX.value + x
        }

        dots.value.push(dot)

        // Create DOM element
        const dotElement = document.createElement('div')
        dotElement.className = 'dot absolute bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-200 pointer-events-auto z-10'
        dotElement.style.width = '18px'
        dotElement.style.height = '18px'
        dotElement.style.left = `${dotX}px`
        dotElement.style.top = `${dotY}px`
        dotElement.style.transform = 'translate(-50%, -50%)'
        dotElement.style.fontSize = '10px'
        dotElement.dataset.dotId = dot.id
        dotElement.innerHTML = `<span style="display: none;">${gridState.dotNumber}</span>`

        // Add hit area
        const hitArea = document.createElement('div')
        hitArea.className = 'absolute rounded-full'
        hitArea.style.width = '28px'
        hitArea.style.height = '28px'
        hitArea.style.top = '50%'
        hitArea.style.left = '50%'
        hitArea.style.transform = 'translate(-50%, -50%)'
        hitArea.style.zIndex = '-1'
        dotElement.appendChild(hitArea)

        // Add event listeners
        dotElement.addEventListener('click', () => applyToolToDot(dot))
        dotElement.addEventListener('mousedown', (e) => startSelect(e, dot))

        gridDiv.appendChild(dotElement)
      }
    }

    container.appendChild(gridDiv)
    addGridMarkers(gridDiv)
    adjustHitArea()
  }

  const applyToolToDot = (dot) => {
    const dotElement = document.querySelector(`[data-dot-id="${dot.id}"]`)
    if (!dotElement) return

    // Remove all color classes first
    removeColorClasses(dotElement)

    if (currentTool.value === 'pencil') {
      dot.colorClass = `color-${selectedColor.value}`

      if (selectedColor.value === 'custom') {
        dotElement.style.backgroundColor = customColor.value
      } else {
        dotElement.classList.add(`color-${selectedColor.value}`)
        dotElement.style.backgroundColor = ''
      }

      // Show number
      const span = dotElement.querySelector('span')
      if (span) span.style.display = 'block'

    } else if (currentTool.value === 'eraser') {
      dot.colorClass = ''
      dotElement.style.backgroundColor = ''
      dotElement.classList.add('bg-gray-300', 'dark:bg-gray-600')

      // Hide number
      const span = dotElement.querySelector('span')
      if (span) span.style.display = 'none'
    }
  }

  const removeColorClasses = (element) => {
    const colorClasses = [
      'color-red', 'color-blue', 'color-green', 'color-yellow',
      'color-purple', 'color-orange', 'color-pink', 'color-teal',
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
      'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-teal-500',
      'bg-gray-300', 'dark:bg-gray-600'
    ]
    element.classList.remove(...colorClasses)
  }

  const startSelect = (e, dot) => {
    e.preventDefault()
    applyToolToDot(dot)
  }

  const addGridMarkers = (gridDiv) => {
    // Add measurement markers to all four sides
    const spacing = gridState.spacing
    const margin = gridState.margin

    // Top and bottom markers
    for (let x = 0; x < countX.value; x++) {
      const xPos = margin + (x * spacing)

      // Top marker
      const topMarker = document.createElement('div')
      topMarker.className = 'marker absolute w-2.5 h-0.5 bg-blue-500 z-20'
      topMarker.style.left = `${xPos}px`
      topMarker.style.top = '-6px'
      topMarker.style.transform = 'translateX(-50%)'
      gridDiv.appendChild(topMarker)

      // Bottom marker
      const bottomMarker = document.createElement('div')
      bottomMarker.className = 'marker absolute w-2.5 h-0.5 bg-blue-500 z-20'
      bottomMarker.style.left = `${xPos}px`
      bottomMarker.style.bottom = '-6px'
      bottomMarker.style.transform = 'translateX(-50%)'
      gridDiv.appendChild(bottomMarker)
    }

    // Left and right markers
    for (let y = 0; y < countY.value; y++) {
      const yPos = margin + (y * spacing)

      // Left marker
      const leftMarker = document.createElement('div')
      leftMarker.className = 'marker absolute w-0.5 h-2.5 bg-orange-500 z-20'
      leftMarker.style.left = '-6px'
      leftMarker.style.top = `${yPos}px`
      leftMarker.style.transform = 'translateY(-50%)'
      gridDiv.appendChild(leftMarker)

      // Right marker
      const rightMarker = document.createElement('div')
      rightMarker.className = 'marker absolute w-0.5 h-2.5 bg-orange-500 z-20'
      rightMarker.style.right = '-6px'
      rightMarker.style.top = `${yPos}px`
      rightMarker.style.transform = 'translateY(-50%)'
      gridDiv.appendChild(rightMarker)
    }
  }

  const adjustHitArea = () => {
    const totalDots = countX.value * countY.value
    let hitAreaSize = 20 // Default size

    if (totalDots > 2000) hitAreaSize = 15
    if (totalDots > 4000) hitAreaSize = 12
    if (totalDots > 6000) hitAreaSize = 10

    document.documentElement.style.setProperty('--hit-area-size', `${hitAreaSize}px`)
  }

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
    }
  }

  const fillAllDots = () => {
    dots.value.forEach(dot => {
      applyToolToDot(dot)
    })
  }

  const clearAllDots = () => {
    dots.value.forEach(dot => {
      const dotElement = document.querySelector(`[data-dot-id="${dot.id}"]`)
      if (dotElement) {
        dot.colorClass = ''
        removeColorClasses(dotElement)
        dotElement.style.backgroundColor = ''
        dotElement.classList.add('bg-gray-300', 'dark:bg-gray-600')

        const span = dotElement.querySelector('span')
        if (span) span.style.display = 'none'
      }
    })
  }

  const saveGrid = () => {
    const state = {
      dots: dots.value,
      gridState: gridState
    }
    localStorage.setItem('nirmana-grid-state', JSON.stringify(state))
  }

  const loadGrid = () => {
    const saved = localStorage.getItem('nirmana-grid-state')
    if (saved) {
      const state = JSON.parse(saved)
      Object.assign(gridState, state.gridState)
      generateGrid()
      // Restore dot states
      nextTick(() => {
        state.dots.forEach(savedDot => {
          const dot = dots.value.find(d => d.id === savedDot.id)
          if (dot) {
            dot.colorClass = savedDot.colorClass
            if (savedDot.colorClass) {
              applyToolToDot(dot)
            }
          }
        })
      })
    }
  }

  const exportImage = () => {
    // Create canvas and export logic
    const container = document.getElementById('grid-container')
    if (container) {
      // Implementation for canvas export
      console.log('Export functionality to be implemented')
    }
  }

  const updateDotNumbers = () => {
    // Update all dot numbers when dotNumber changes
    dots.value.forEach(dot => {
      const dotElement = document.querySelector(`[data-dot-id="${dot.id}"]`)
      if (dotElement) {
        const span = dotElement.querySelector('span')
        if (span) {
          span.textContent = gridState.dotNumber.toString()
        }
      }
    })
  }

  return {
    scale,
    xOffset,
    yOffset,
    isDragging,
    selectedColor,
    currentTool,
    customColor,
    isControlsCollapsed,
    gridState,
    dots,
    zoomPercentage,
    generateGrid,
    applyToolToDot,
    startSelect,
    resetView,
    updateTransform,
    fillAllDots,
    clearAllDots,
    saveGrid,
    loadGrid,
    exportImage,
    updateDotNumbers
  }
}
