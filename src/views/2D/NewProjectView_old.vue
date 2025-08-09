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
    
    <!-- Zoom Info & Reset View -->
    <div class="fixed top-5 right-5 z-10 flex items-center gap-2">
      <div class="bg-white/80 dark:bg-slate-800/80 px-3 py-2 rounded-lg shadow-lg backdrop-blur text-sm">
        Zoom: {{ zoomPercentage }}%
      </div>
      <button 
        @click="resetView()"
        class="p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg shadow-lg backdrop-blur hover:bg-white/90 dark:hover:bg-slate-800/90 transition-colors"
        title="Reset View"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>

    <!-- Grid Container -->
    <div class="absolute inset-0 flex items-center justify-center p-20">
      <div 
        id="grid-container"
        class="transition-transform duration-200 ease-out"
        style="transform-origin: center center;"
      ></div>
    </div>

    <!-- Floating Control Panel -->
    <div class="fixed bottom-5 left-5 z-30 bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 max-h-[70vh] flex flex-col">
      <!-- Panel Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Control Panel</h3>
      </div>

      <!-- Tab Navigation -->
      <div class="flex border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'flex-1 px-3 py-2 text-sm font-medium transition-colors',
            activeTab === tab.id
              ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content (Scrollable) -->
      <div class="p-4 overflow-y-auto flex-1">
        <!-- Board Tab -->
        <div v-if="activeTab === 'board'" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dots Count Horizontal
            </label>
            <input
              v-model.number="boardSettings.dotsCountHorizontal"
              type="number"
              min="5"
              max="50"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dots Count Vertical
            </label>
            <input
              v-model.number="boardSettings.dotsCountVertical"
              type="number"
              min="5"
              max="50"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Margin Between Nails (px)
            </label>
            <input
              v-model.number="boardSettings.marginBetweenNails"
              type="number"
              min="10"
              max="100"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Padding Board (px)
            </label>
            <input
              v-model.number="boardSettings.paddingBoard"
              type="number"
              min="10"
              max="100"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <!-- Board Color Section -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Board Color
            </label>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="colorOption in boardColorOptions"
                :key="colorOption.id"
                @click="selectBoardColor(colorOption)"
                :class="[
                  'relative cursor-pointer transition-all',
                  selectedBoardColor === colorOption.id
                    ? 'ring-2 ring-indigo-600 ring-offset-2'
                    : 'hover:ring-2 hover:ring-gray-400 hover:ring-offset-1'
                ]"
                :title="colorOption.label"
              >
                <div
                  :style="{ backgroundColor: colorOption.id === 'custom' ? customBoardColor : colorOption.color }"
                  class="w-10 h-10 rounded-full border-2 border-white shadow-md relative"
                >
                  <!-- Pencil icon for custom color -->
                  <div
                    v-if="colorOption.id === 'custom'"
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <svg class="w-4 h-4 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </div>
                </div>
                <!-- Selected indicator -->
                <div
                  v-if="selectedBoardColor === colorOption.id && colorOption.id !== 'custom'"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <svg class="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Custom Color Picker -->
            <div v-if="selectedBoardColor === 'custom'" class="mt-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Custom Color
              </label>
              <div class="flex items-center space-x-2">
                <input
                  v-model="customBoardColor"
                  type="color"
                  class="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  @input="updateCustomBoardColor"
                />
                <input
                  v-model="customBoardColor"
                  type="text"
                  placeholder="#8B4513"
                  class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  @input="updateCustomBoardColor"
                />
              </div>
            </div>
            
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Selected: {{ boardColorOptions.find(c => c.id === selectedBoardColor)?.label }}
            </p>
          </div>
        </div>

        <!-- Nail Settings Tab -->
        <div v-if="activeTab === 'nailSettings'" class="space-y-6">
          <!-- Nail Width Section -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Select Nail Width (Color Coded)
            </label>
            <div class="space-y-3">
              <div
                v-for="width in nailWidthOptions"
                :key="width.id"
                @click="selectedNailWidth = width.id"
                :class="[
                  'p-3 rounded-lg border-2 cursor-pointer transition-all',
                  selectedNailWidth === width.id
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30'
                    : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400'
                ]"
              >
                <div class="flex items-center space-x-3">
                  <div
                    :style="{ backgroundColor: width.color }"
                    class="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  ></div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">
                      {{ width.label }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {{ width.color }}
                    </div>
                  </div>
                  <div
                    v-if="selectedNailWidth === width.id"
                    class="ml-auto text-indigo-600 dark:text-indigo-400"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Selected Width: {{ nailWidthOptions.find(w => w.id === selectedNailWidth)?.label }}
            </p>
          </div>
          
          <!-- Nail Height Section -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Select Nail Height (1-10)
            </label>
            <div class="grid grid-cols-5 gap-2">
              <button
                v-for="height in nailHeightOptions"
                :key="height"
                @click="selectedNailHeight = height"
                :class="[
                  'w-12 h-12 rounded-lg border-2 font-semibold transition-all',
                  selectedNailHeight === height
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-indigo-400'
                ]"
              >
                {{ height }}
              </button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Selected Height: {{ selectedNailHeight }}
            </p>
          </div>
        </div>

        <!-- Settings Tab -->
        <div v-if="activeTab === 'settings'" class="space-y-4">
          <!-- Project Name Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Name
            </label>
            <input
              v-model="projectName"
              type="text"
              placeholder="Enter project name..."
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div class="space-y-3">
            <button 
              @click="clearAllNails()"
              class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Clear All Nails
            </button>
            
            <button 
              @click="handleSaveProject()"
              :disabled="isSaving || !projectName.trim()"
              class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <svg v-if="isSaving" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {{ isSaving ? 'Saving...' : 'Save Project' }}
            </button>
          </div>
          
          <div class="text-center text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <svg class="w-8 h-8 mx-auto mb-2 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-xs">
              Click dots to add nails<br>
              Click again with same settings to remove<br>
              Right-click to remove<br>
              Ctrl+Scroll to zoom<br>
              Alt+Drag to pan
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { use2DGrid } from '@/composables/use2DGrid'
import { useDark, useToggle } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from '@/composables/useToast'

// Dark mode
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
})
const toggleDarkMode = useToggle(isDark)

// Router setup
const router = useRouter()
const route = useRoute()

// Toast setup
const { success, error, warning, info } = useToast()

const showMobileAlert = ref(false)

// Project state
const projectName = ref('')
const isSaving = ref(false)

// Control Panel State
const activeTab = ref('nailSettings')

const tabs = [
  { id: 'board', label: 'Board' },
  { id: 'nailSettings', label: 'Nails' },
  { id: 'settings', label: 'Settings' }
]

// Board Settings
const boardSettings = reactive({
  dotsCountHorizontal: 20,
  dotsCountVertical: 20,
  marginBetweenNails: 10,
  paddingBoard: 40,
  boardColor: '#8B4513' // Default brown color for MDF
})

// Board Color Options (Secondary Colors)
const selectedBoardColor = ref('brown')
const customBoardColor = ref('#8B4513')

const boardColorOptions = [
  { id: 'brown', label: 'Brown (MDF)', color: '#8B4513' },
  { id: 'orange', label: 'Orange', color: '#f97316' },
  { id: 'purple', label: 'Purple', color: '#a855f7' },
  { id: 'green', label: 'Green', color: '#22c55e' },
  { id: 'gray', label: 'Gray', color: '#6b7280' },
  { id: 'pink', label: 'Pink', color: '#ec4899' },
  { id: 'custom', label: 'Custom', color: customBoardColor }
]

// Nail Height Settings
const selectedNailHeight = ref(1)
const nailHeightOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Nail Width Settings (RGB Color Coded)
const selectedNailWidth = ref('thin')
const nailWidthOptions = [
  { id: 'thin', label: 'Thin (Red)', color: '#ef4444' },    // Red for thin
  { id: 'medium', label: 'Medium (Green)', color: '#22c55e' }, // Green for medium  
  { id: 'thick', label: 'Thick (Blue)', color: '#3b82f6' }  // Blue for thick
]

// Initialize 2D Grid with settings
const {
  zoomPercentage,
  resetView,
  generateGrid,
  clearAllNails,
  saveGrid,
  loadGrid,
  exportGrid,
  importGrid,
  nails,
  scale,
  xOffset,
  yOffset,
  updateTransform
} = use2DGrid(boardSettings, selectedNailHeight, selectedNailWidth, nailWidthOptions)

// Board color selection methods
const selectBoardColor = (colorOption) => {
  selectedBoardColor.value = colorOption.id
  
  if (colorOption.id === 'custom') {
    boardSettings.boardColor = customBoardColor.value
  } else {
    boardSettings.boardColor = colorOption.color
  }
}

const updateCustomBoardColor = () => {
  if (selectedBoardColor.value === 'custom') {
    boardSettings.boardColor = customBoardColor.value
  }
}

// Cookie utility functions
const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

// Save project to backend
const handleSaveProject = async () => {
  if (!projectName.value.trim()) {
    warning('Please enter a project name')
    return
  }

  isSaving.value = true
  
  try {
    const token = getCookie('sess_token')
    if (!token) {
      warning('Please login to save projects')
      return
    }

    const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL
    if (!backendUrl) {
      throw new Error('Backend URL not configured')
    }

    // Prepare board configuration
    const boardConfig = {
      dotsCountHorizontal: boardSettings.dotsCountHorizontal,
      dotsCountVertical: boardSettings.dotsCountVertical,
      marginBetweenNails: boardSettings.marginBetweenNails,
      paddingBoard: boardSettings.paddingBoard,
      boardColor: boardSettings.boardColor
    }

    // Get current nails data - already in coordinate-based format
    const nailsData = Object.fromEntries(
      Object.entries(nails.value).map(([positionKey, nail]) => [
        positionKey,
        {
          height: nail.height,
          width: nail.width // Now using numeric width
        }
      ])
    )

    console.log(`nails.value`, nailsData, Object.keys(nails.value).length)

    // Create new project (POST request)
    const projectData = {
      project: {
        name: projectName.value.trim(),
        board_config: boardConfig,
        nails: nailsData
      }
    }

    const response = await fetch(`${backendUrl}/api/v1/projects`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to save project' }))
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log('Project saved successfully:', result)
    success(`Project "${projectName.value}" saved successfully!`)
    
    // Redirect to the project page with the new ID
    const projectId = result.project?.id
    if (projectId) {
      router.push(`/2d/${projectId}`)
    }
    
  } catch (error) {
    console.error('Error saving project:', error)
    alert(`Failed to save project: ${error.message}`)
  } finally {
    isSaving.value = false
  }
}

// Enhanced save grid with console logging for backend (legacy function)
const handleSaveGrid = () => {
  try {
    const result = saveGrid()
    
    // Show success message with data info
    const message = result 
      ? `Grid saved! ${result.nailCount} nails saved. Check console for backend data structure.`
      : 'Grid saved! Check console for backend data structure.'
      
    alert(message)
  } catch (error) {
    console.error('Save failed:', error)
    alert('Failed to save grid')
  }
}

// File import handler
const handleFileImport = async (event) => {
  const file = event.target.files[0]
  if (file) {
    try {
      await importGrid(file)
      console.log('Grid imported successfully')
      // Reset the file input
      event.target.value = ''
    } catch (error) {
      console.error('Failed to import grid:', error)
      alert('Failed to import grid. Please check the file format.')
      event.target.value = ''
    }
  }
}

// Add zoom functionality
const handleWheel = (event) => {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault()
    const delta = event.deltaY
    const zoomFactor = 0.1
    
    if (delta < 0) {
      // Zoom in
      scale.value = Math.min(scale.value + zoomFactor, 3)
    } else {
      // Zoom out
      scale.value = Math.max(scale.value - zoomFactor, 0.2)
    }
    
    updateTransform()
  }
}

// Pan functionality
let isPanning = false
let lastPanX = 0
let lastPanY = 0

const handleMouseDown = (event) => {
  if (event.button === 1 || (event.button === 0 && event.altKey)) { // Middle mouse or Alt+left click
    event.preventDefault()
    isPanning = true
    lastPanX = event.clientX
    lastPanY = event.clientY
    document.body.style.cursor = 'grabbing'
  }
}

const handleMouseMove = (event) => {
  if (isPanning) {
    const deltaX = event.clientX - lastPanX
    const deltaY = event.clientY - lastPanY
    
    xOffset.value += deltaX
    yOffset.value += deltaY
    
    lastPanX = event.clientX
    lastPanY = event.clientY
    
    updateTransform()
  }
}

const handleMouseUp = () => {
  if (isPanning) {
    isPanning = false
    document.body.style.cursor = 'default'
  }
}

// Mobile detection
const checkMobile = () => {
  const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  showMobileAlert.value = isMobile
}

// Lifecycle
onMounted(() => {
  checkMobile()
  generateGrid()

  // Set default project name with current date for new projects
  const today = new Date()
  const dateString = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
  projectName.value = `MDF Grid ${dateString}`

  // Load saved grid if exists (for new projects)
  loadGrid()

  // Add global event listeners
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  // Cleanup event listeners
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
  window.removeEventListener('resize', checkMobile)

  // Save grid state
  saveGrid()
})
</script>
