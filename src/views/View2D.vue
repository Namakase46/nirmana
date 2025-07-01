<template>
  <div class="h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-900 relative text-gray-900 dark:text-white">
    <!-- Mobile Alert -->
    <div 
      v-if="showMobileAlert" 
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md mx-4 text-center">
        <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-indigo-600 mb-4">Mobile Warning</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          This application is optimized for desktop. For the best experience, use a computer or laptop.
        </p>
        <button 
          @click="showMobileAlert = false"
          class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
    
    <!-- App Title -->
    <div class="fixed top-4 left-1/2 transform -translate-x-1/2 z-20">
      <h1 class="text-xl font-semibold bg-white/80 dark:bg-slate-800/80 px-5 py-2 rounded-full shadow-lg backdrop-blur">
        MDF Board Simulation with Margin
      </h1>
    </div>
    
    <!-- Navigation Buttons -->
    <div class="fixed top-5 left-5 z-20 flex gap-2">
      <!-- Home Button -->
      <router-link 
        to="/"
        class="p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-lg backdrop-blur hover:bg-white/90 dark:hover:bg-slate-800/90 transition-colors"
        title="Back to Home"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </router-link>
      
      <!-- 3D Mode Toggle -->
      <router-link 
        to="/3d"
        class="p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-lg backdrop-blur hover:bg-white/90 dark:hover:bg-slate-800/90 transition-colors"
        title="Switch to 3D Mode"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </router-link>
      
      <!-- Dark Mode Toggle -->
      <button 
        @click="toggleDarkMode()"
        class="p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-lg backdrop-blur hover:bg-white/90 dark:hover:bg-slate-800/90 transition-colors"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
    </div>
    
    <!-- Zoom Info -->
    <div class="fixed top-5 right-5 z-10 bg-white/80 dark:bg-slate-800/80 px-3 py-2 rounded-lg shadow-lg backdrop-blur text-sm">
      Zoom: {{ zoomPercentage }}%
    </div>
    
    <!-- Controls Panel -->
    <div 
      :class="[
        'fixed bottom-5 left-1/2 transform -translate-x-1/2 z-10 bg-white/50 dark:bg-slate-800/50 rounded-xl shadow-lg backdrop-blur transition-all duration-500 w-[90%] max-w-2xl',
        isControlsCollapsed ? 'translate-y-[calc(100%-3rem)]' : ''
      ]"
    >
      <!-- Controls Header -->
      <div 
        @click="isControlsCollapsed = !isControlsCollapsed"
        class="flex items-center justify-between p-4 cursor-pointer border-b border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center gap-2 font-semibold">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
          Control Panel
        </div>
        <svg 
          :class="['w-5 h-5 transition-transform duration-500', isControlsCollapsed ? 'rotate-180' : '']"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </div>
      
      <!-- Controls Content -->
      <div 
        :class="[
          'overflow-hidden transition-all duration-500',
          isControlsCollapsed ? 'max-h-0 opacity-0' : 'max-h-[500px] opacity-100'
        ]"
      >
        <div class="p-4 space-y-4">
          <!-- Grid Settings -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Lebar papan (cm)</label>
              <input 
                v-model.number="gridState.width" 
                type="number" 
                min="10" 
                max="10000" 
                step="10"
                class="w-full px-3 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
                @change="generateGrid"
              >
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Tinggi papan (cm)</label>
              <input 
                v-model.number="gridState.height" 
                type="number" 
                min="10" 
                max="10000" 
                step="10"
                class="w-full px-3 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
                @change="generateGrid"
              >
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Jarak antar garis (cm)</label>
              <input 
                v-model.number="gridState.margin" 
                type="number" 
                min="1" 
                max="42"
                class="w-full px-3 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
                @change="generateGrid"
              >
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Margin dari tepi (cm)</label>
              <input 
                v-model.number="gridState.spacing" 
                type="number" 
                min="0" 
                max="50"
                class="w-full px-3 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
                @change="generateGrid"
              >
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Angka pada dot</label>
              <input 
                v-model.number="gridState.dotNumber" 
                type="number" 
                min="0"
                max="9" 
                step="1"
                class="w-full px-3 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
                @change="updateDotNumbers"
              >
            </div>
          </div>
          
          <!-- Tools -->
          <div class="flex gap-2">
            <button 
              @click="currentTool = 'pencil'"
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
                currentTool === 'pencil' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
              ]"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Pencil
            </button>
            <button 
              @click="currentTool = 'eraser'"
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
                currentTool === 'eraser' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
              ]"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Eraser
            </button>
          </div>
          
          <!-- Colors -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Color</label>
            <div class="flex gap-2 flex-wrap">
              <button 
                v-for="color in colors" 
                :key="color"
                @click="selectedColor = color"
                :class="[
                  `w-8 h-8 rounded-full border-2 transition-all`,
                  `bg-${color}-500`,
                  selectedColor === color ? 'border-gray-800 dark:border-white scale-110' : 'border-gray-300'
                ]"
              ></button>
              <input 
                v-model="customColor"
                type="color"
                @change="selectedColor = 'custom'"
                class="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer"
              >
            </div>
          </div>
          
          <!-- Actions -->
          <div class="flex gap-2 flex-wrap">
            <button 
              @click="generateGrid"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Generate Grid
            </button>
            <button 
              @click="fillAllDots"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fill All
            </button>
            <button 
              @click="clearAllDots"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear All
            </button>
            <button 
              @click="resetView"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Reset View
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main Container -->
    <div 
      ref="containerRef"
      class="w-full h-full flex justify-center items-center overflow-hidden relative"
      :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
      @mousedown="startPan"
      @mousemove="continuePan"
      @mouseup="endPan"
      @wheel="handleWheel"
    >
      <div 
        id="grid-container"
        ref="gridContainer"
        class="relative transition-transform duration-75 ease-out cursor-auto"
      >
        <!-- Grid will be generated here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { use2DGrid } from '@/composables/use2DGrid'
import { useDark, useToggle } from '@vueuse/core'

// Composables
const {
  scale,
  xOffset,
  yOffset,
  isDragging,
  selectedColor,
  currentTool,
  customColor,
  isControlsCollapsed,
  gridState,
  zoomPercentage,
  generateGrid,
  resetView,
  updateTransform,
  fillAllDots,
  clearAllDots,
  updateDotNumbers
} = use2DGrid()

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
})
const toggleDarkMode = useToggle(isDark)

// Local state
const containerRef = ref(null)
const gridContainer = ref(null)
const showMobileAlert = ref(false)

// Color options
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'teal']

// Pan functionality
let startX = 0
let startY = 0

const startPan = (e) => {
  if (e.target === containerRef.value || e.target.closest('#grid-container')) {
    isDragging.value = true
    startX = e.clientX - xOffset.value
    startY = e.clientY - yOffset.value
  }
}

const continuePan = (e) => {
  if (isDragging.value) {
    xOffset.value = e.clientX - startX
    yOffset.value = e.clientY - startY
    updateTransform()
  }
}

const endPan = () => {
  isDragging.value = false
}

const handleWheel = (e) => {
  e.preventDefault()
  const delta = e.deltaY > 0 ? 0.9 : 1.1
  scale.value = Math.max(0.1, Math.min(5, scale.value * delta))
  updateTransform()
}

// Mobile detection
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth < 768
}

// Lifecycle
onMounted(() => {
  // Check if mobile
  showMobileAlert.value = isMobileDevice()
  
  generateGrid()
  
  // Add global event listeners
  window.addEventListener('mouseup', endPan)
  window.addEventListener('resize', () => {
    updateTransform()
    if (isMobileDevice()) {
      showMobileAlert.value = true
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('mouseup', endPan)
})
</script>
