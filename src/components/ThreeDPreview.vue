<template>
  <div class="threed-preview w-full h-full relative bg-gray-100 dark:bg-gray-800">
    <!-- Loading overlay -->
    <div v-if="isLoading" class="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-90 flex items-center justify-center z-10">
      <div class="text-center">
        <div class="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-600 dark:text-gray-300">{{ loadingMessage }}</p>
      </div>
    </div>

    <!-- Canvas container -->
    <div ref="canvasContainer" class="w-full h-full" style="touch-action: none;"></div>

    <!-- Controls overlay -->
    <div class="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-3 space-y-2 z-20">
      <button
        @click="resetCamera"
        class="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors"
        title="Reset Camera"
      >
        <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
      
      <button
        @click="toggleAutoRotate"
        class="flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
        :class="autoRotate ? 'bg-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-gray-300'"
        title="Toggle Auto Rotation"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>

    <!-- Stats overlay -->
    <div class="absolute bottom-4 left-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-3 text-sm z-20">
      <div class="space-y-1">
        <div class="flex justify-between items-center gap-4">
          <span class="text-gray-600 dark:text-gray-400">Nails:</span>
          <span class="font-medium text-gray-900 dark:text-gray-100">{{ nailCount }}</span>
        </div>
        <div class="flex justify-between items-center gap-4">
          <span class="text-gray-600 dark:text-gray-400">Grid:</span>
          <span class="font-medium text-gray-900 dark:text-gray-100">{{ gridDimensions }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import { use3DScene } from '@/composables/use3DScene'

// Props
const props = defineProps({
  nailsData: {
    type: Object,
    default: () => ({})
  },
  boardConfig: {
    type: Object,
    default: () => ({})
  }
})

// Refs
const canvasContainer = ref(null)

// State
const isLoading = ref(true)
const loadingMessage = ref('Initializing 3D scene...')
const autoRotate = ref(false)

// Computed
const nailCount = computed(() => Object.keys(props.nailsData).length)
const gridDimensions = computed(() => {
  const horizontal = props.boardConfig?.dotsCountHorizontal || 0
  const vertical = props.boardConfig?.dotsCountVertical || 0
  return `${horizontal}×${vertical}`
})

// Use 3D Scene composable
const {
  scene,
  camera,
  renderer,
  controls,
  initScene,
  createNails,
  updateSettings,
  onWindowResize
} = use3DScene(canvasContainer)

// Convert 2D board config to 3D settings
const convertBoardConfigTo3D = (boardConfig, nailsData) => {
  if (!boardConfig) return {}
  
  // Handle color conversion - remove # and convert to hex number
  let boardColorHex = 0xa4846a // default brown color
  if (boardConfig.boardColor) {
    const colorStr = boardConfig.boardColor.replace('#', '')
    boardColorHex = parseInt(colorStr, 16)
  }
  
  const settings = {
    boardColor: boardColorHex,
    boardWidth: (boardConfig.dotsCountHorizontal || 20) * ((boardConfig.marginBetweenNails || 10) / 10),
    boardDepth: (boardConfig.dotsCountVertical || 20) * ((boardConfig.marginBetweenNails || 10) / 10),
    boardHeight: 2,
    nailSpacing: (boardConfig.marginBetweenNails || 10) / 10,
    edgeMargin: (boardConfig.paddingBoard || 40) / 100,
    // Add custom nail data for the 3D scene
    customNailData: {
      nails: nailsData || {},
      gridWidth: boardConfig.dotsCountHorizontal || 20,
      gridHeight: boardConfig.dotsCountVertical || 20,
      marginBetweenNails: boardConfig.marginBetweenNails || 10,
      paddingBoard: boardConfig.paddingBoard || 40
    }
  }
  
  return settings
}

// Initialize 3D scene
const init3DScene = async () => {
  if (!canvasContainer.value) return
  
  try {
    loadingMessage.value = 'Setting up 3D environment...'
    
    // Initialize the scene
    await initScene()
    
    // Convert and apply board settings with nail data
    const settings3D = convertBoardConfigTo3D(props.boardConfig, props.nailsData)
    await updateSettings(settings3D)
    
    // Only create nails if we have nail data
    if (Object.keys(props.nailsData).length > 0) {
      loadingMessage.value = 'Adding nails...'
      // Create nails in the scene
      await createNails()
    }
    
    isLoading.value = false
    
  } catch (error) {
    console.error('Failed to initialize 3D scene:', error)
    isLoading.value = false
  }
}

// Update 3D scene when data changes
const update3DScene = async () => {
  if (!scene.value || isLoading.value) return
  
  try {
    // Convert and update settings with new nail data
    const settings3D = convertBoardConfigTo3D(props.boardConfig, props.nailsData)
    await updateSettings(settings3D)
    
    // Only create nails if we have nail data
    if (Object.keys(props.nailsData).length > 0) {
      // Recreate nails with new data
      await createNails()
    }
    
  } catch (error) {
    console.error('Failed to update 3D scene:', error)
  }
}

// Control functions
const resetCamera = () => {
  console.log('Reset camera clicked')
  if (controls.value) {
    controls.value.reset()
  } else {
    console.log('Controls not available')
  }
}

const toggleAutoRotate = () => {
  console.log('Toggle auto rotate clicked, current:', autoRotate.value)
  autoRotate.value = !autoRotate.value
  if (controls.value) {
    controls.value.autoRotate = autoRotate.value
    console.log('Auto rotate set to:', autoRotate.value)
  } else {
    console.log('Controls not available for auto rotate')
  }
}

// Watch for changes in props - with improved debouncing
let updateTimeout
watch(() => props.nailsData, () => {
  if (updateTimeout) clearTimeout(updateTimeout)
  updateTimeout = setTimeout(() => {
    nextTick(() => {
      update3DScene()
    })
  }, 150) // Debounce updates for better performance
}, { deep: true })

watch(() => props.boardConfig, () => {
  if (updateTimeout) clearTimeout(updateTimeout)
  updateTimeout = setTimeout(() => {
    nextTick(() => {
      update3DScene()
    })
  }, 150)
}, { deep: true })

// Lifecycle
onMounted(() => {
  nextTick(() => {
    init3DScene()
  })
})

onUnmounted(() => {
  // Clear any pending timeout
  if (updateTimeout) clearTimeout(updateTimeout)
  // Cleanup is handled by the composable
})
</script>
