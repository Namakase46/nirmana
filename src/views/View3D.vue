<template>
  <div class="h-screen w-screen overflow-hidden bg-gray-100 relative text-gray-900 dark:text-white">
    <!-- Loading Screen -->
    <div 
      v-if="isLoading"
      class="fixed inset-0 bg-gray-100 flex items-center justify-center z-50"
    >
      <div class="text-center">
        <div class="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
    
    <!-- 3D Canvas -->
    <div 
      ref="canvasContainer"
      class="fixed inset-0 z-0"
    ></div>
    
    <!-- Navigation Buttons -->
    <div class="absolute top-4 left-4 z-20 flex gap-2">
      <!-- Home Button -->
      <router-link 
        to="/"
        class="p-3 bg-white/90 dark:bg-slate-800/90 rounded-lg shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
        title="Back to Home"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </router-link>
      
      <!-- 2D Mode Toggle -->
      <router-link 
        to="/2d"
        class="p-3 bg-white/90 dark:bg-slate-800/90 rounded-lg shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
        title="Switch to 2D Mode"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      </router-link>
      
      <!-- Dark Mode Toggle -->
      <button 
        @click="toggleDarkMode"
        class="p-3 bg-white/90 dark:bg-slate-800/90 rounded-lg shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
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
    
    <!-- Controls Panel -->
    <div class="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 dark:text-white rounded-lg shadow-lg p-4 w-72 max-h-[90vh] overflow-y-auto z-20">
      <!-- Performance -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Performa</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Grid Paku:</label>
            <select 
              v-model="localSettings.nailGrid"
              @change="updateSettings({ nailGrid: localSettings.nailGrid })"
              class="px-2 py-1 border rounded text-sm"
            >
              <option :value="21">21×21 (441 paku)</option>
              <option :value="31">31×31 (961 paku)</option>
              <option :value="41">41×41 (1681 paku)</option>
            </select>
          </div>
          <div class="text-xs text-gray-600">
            Total: {{ localSettings.nailGrid * localSettings.nailGrid }} paku
          </div>
        </div>
      </div>
      
      <!-- Nail Spacing -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Jarak Antar Paku</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Jarak (cm):</label>
            <input 
              v-model.number="localSettings.nailSpacing"
              @input="updateSettings({ nailSpacing: localSettings.nailSpacing })"
              type="number" 
              min="0.5" 
              max="3" 
              step="0.1"
              class="w-16 px-2 py-1 border rounded text-sm"
            >
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Distribusi:</label>
            <select 
              v-model="localSettings.spacingDistribution"
              @change="updateSettings({ spacingDistribution: localSettings.spacingDistribution })"
              class="px-2 py-1 border rounded text-sm"
            >
              <option value="uniform">Seragam</option>
              <option value="center">Padat Tengah</option>
              <option value="edges">Padat Tepi</option>
              <option value="random">Acak Teratur</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Board Margin -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Margin Papan</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Margin Tepi (cm):</label>
            <input 
              v-model.number="localSettings.edgeMargin"
              @input="updateSettings({ edgeMargin: localSettings.edgeMargin })"
              type="number" 
              min="0" 
              max="2" 
              step="0.1"
              class="w-16 px-2 py-1 border rounded text-sm"
            >
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Margin Atas (cm):</label>
            <input 
              v-model.number="localSettings.topMargin"
              @input="updateSettings({ topMargin: localSettings.topMargin })"
              type="number" 
              min="0" 
              max="2" 
              step="0.1"
              class="w-16 px-2 py-1 border rounded text-sm"
            >
          </div>
        </div>
      </div>
      
      <!-- Nirmana Patterns -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Pola Nirmana</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Pola:</label>
            <select 
              v-model="localSettings.pattern"
              @change="updateSettings({ pattern: localSettings.pattern })"
              class="px-2 py-1 border rounded text-sm"
            >
              <option v-for="pattern in patterns" :key="pattern" :value="pattern">
                {{ pattern }}
              </option>
            </select>
          </div>
          
          <!-- Pattern Preview Grid -->
          <div class="grid grid-cols-4 gap-1 mt-3">
            <button 
              v-for="pattern in patterns.slice(0, 12)" 
              :key="pattern"
              @click="localSettings.pattern = pattern; updateSettings({ pattern })"
              :class="[
                'border-2 rounded p-1 text-xs transition-all',
                localSettings.pattern === pattern ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-300'
              ]"
            >
              {{ pattern }}
            </button>
          </div>
          
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Intensitas:</label>
            <input 
              v-model.number="localSettings.patternIntensity"
              @input="updateSettings({ patternIntensity: localSettings.patternIntensity })"
              type="range" 
              min="0.1" 
              max="2" 
              step="0.1"
              class="flex-1 ml-2"
            >
          </div>
          
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Skala:</label>
            <input 
              v-model.number="localSettings.patternScale"
              @input="updateSettings({ patternScale: localSettings.patternScale })"
              type="range" 
              min="1" 
              max="10" 
              step="0.5"
              class="flex-1 ml-2"
            >
          </div>
        </div>
      </div>
      
      <!-- Artistic Colors -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Warna Artistik</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Skema:</label>
            <select 
              v-model="localSettings.colorScheme"
              @change="updateSettings({ colorScheme: localSettings.colorScheme })"
              class="px-2 py-1 border rounded text-sm"
            >
              <option value="custom">Kustom</option>
              <option value="rainbow">Pelangi</option>
              <option value="monochromatic">Monokromatik</option>
              <option value="complementary">Komplementer</option>
            </select>
          </div>
          
          <!-- Color Preview Grid -->
          <div class="grid grid-cols-3 gap-1">
            <div 
              v-for="(color, index) in colorPreviews" 
              :key="index"
              :style="{ backgroundColor: color }"
              class="h-8 rounded border-2 border-gray-300 cursor-pointer"
              @click="localSettings.colorScheme = 'custom'; updateSettings({ baseColor: parseInt(color.slice(1), 16) })"
            ></div>
          </div>
          
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Warna Dasar:</label>
            <input 
              :value="'#' + localSettings.baseColor.toString(16).padStart(6, '0')"
              @input="updateBaseColor"
              type="color"
              class="w-8 h-8 border rounded cursor-pointer"
            >
          </div>
          
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Variasi:</label>
            <input 
              v-model.number="localSettings.colorVariation"
              @input="updateSettings({ colorVariation: localSettings.colorVariation })"
              type="range" 
              min="0" 
              max="1" 
              step="0.1"
              class="flex-1 ml-2"
            >
          </div>
          
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Kecerahan:</label>
            <input 
              v-model.number="localSettings.brightness"
              @input="updateSettings({ brightness: localSettings.brightness })"
              type="range" 
              min="0.2" 
              max="1.2" 
              step="0.1"
              class="flex-1 ml-2"
            >
          </div>
        </div>
      </div>
      
      <!-- Board Settings -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Pengaturan Papan</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Warna Papan:</label>
            <input 
              :value="'#' + localSettings.boardColor.toString(16).padStart(6, '0')"
              @input="updateBoardColor"
              type="color"
              class="w-8 h-8 border rounded cursor-pointer"
            >
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Tinggi (cm):</label>
            <input 
              v-model.number="localSettings.boardHeight"
              @input="updateSettings({ boardHeight: localSettings.boardHeight })"
              type="number" 
              min="1" 
              max="5" 
              step="0.5"
              class="w-16 px-2 py-1 border rounded text-sm"
            >
          </div>
        </div>
      </div>
      
      <!-- Nail Settings -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Pengaturan Paku</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Tinggi Min (cm):</label>
            <input 
              v-model.number="localSettings.minNailHeight"
              @input="updateSettings({ minNailHeight: localSettings.minNailHeight })"
              type="number" 
              min="0.5" 
              max="3" 
              step="0.1"
              class="w-16 px-2 py-1 border rounded text-sm"
            >
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Tinggi Max (cm):</label>
            <input 
              v-model.number="localSettings.maxNailHeight"
              @input="updateSettings({ maxNailHeight: localSettings.maxNailHeight })"
              type="number" 
              min="2" 
              max="10" 
              step="0.1"
              class="w-16 px-2 py-1 border rounded text-sm"
            >
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Ukuran Kepala:</label>
            <input 
              v-model.number="localSettings.headSizeRatio"
              @input="updateSettings({ headSizeRatio: localSettings.headSizeRatio })"
              type="range" 
              min="1" 
              max="3" 
              step="0.1"
              class="flex-1 ml-2"
            >
          </div>
        </div>
      </div>
      
      <!-- Lighting -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Pencahayaan</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Intensitas:</label>
            <input 
              v-model.number="localSettings.lightIntensity"
              @input="updateSettings({ lightIntensity: localSettings.lightIntensity })"
              type="range" 
              min="0.5" 
              max="3" 
              step="0.1"
              class="flex-1 ml-2"
            >
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Kontras:</label>
            <input 
              v-model.number="localSettings.lightContrast"
              @input="updateSettings({ lightContrast: localSettings.lightContrast })"
              type="range" 
              min="0.5" 
              max="3" 
              step="0.1"
              class="flex-1 ml-2"
            >
          </div>
        </div>
      </div>
      
      <!-- Display -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 pb-2 border-b">Tampilan</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Detail Paku:</label>
            <select 
              v-model="localSettings.nailDetail"
              @change="updateSettings({ nailDetail: localSettings.nailDetail })"
              class="px-2 py-1 border rounded text-sm"
            >
              <option value="low">Rendah</option>
              <option value="medium">Sedang</option>
              <option value="high">Tinggi</option>
            </select>
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Rotasi Otomatis:</label>
            <input 
              v-model="localSettings.autoRotate"
              @change="updateSettings({ autoRotate: localSettings.autoRotate })"
              type="checkbox"
              class="w-4 h-4"
            >
          </div>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="space-y-2">
        <button 
          @click="updateSettings(localSettings)"
          class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          Terapkan Perubahan
        </button>
        <button 
          @click="takeScreenshot"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Ambil Screenshot
        </button>
      </div>
    </div>
    
    <!-- Status -->
    <div 
      v-if="statusMessage"
      class="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-lg shadow-lg z-20 transition-opacity"
    >
      {{ statusMessage }}
    </div>
    
    <!-- Performance Info -->
    <div class="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg shadow-lg text-sm z-20">
      FPS: {{ fps }} | Memori: {{ memoryUsage }} MB
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { use3DScene } from '../composables/use3DScene.js'

// Dark mode
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
})
const toggleDarkMode = useToggle(isDark)

// Template refs
const canvasContainer = ref(null)

// Use 3D scene composable
const {
  isLoading,
  settings,
  fps,
  memoryUsage,
  patterns,
  updateSettings,
  takeScreenshot
} = use3DScene(canvasContainer)

// Local state for reactive inputs
const localSettings = reactive({ ...settings.value })
const statusMessage = ref('')

// Color previews
const colorPreviews = computed(() => [
  '#ff6b6b', '#4ecdc4', '#45b7d1',
  '#96ceb4', '#feca57', '#ff9ff3',
  '#54a0ff', '#5f27cd', '#00d2d3'
])

// Methods
const updateBaseColor = (e) => {
  const color = parseInt(e.target.value.slice(1), 16)
  localSettings.baseColor = color
  updateSettings({ baseColor: color })
}

const updateBoardColor = (e) => {
  const color = parseInt(e.target.value.slice(1), 16)
  localSettings.boardColor = color
  updateSettings({ boardColor: color })
}

// Show status message temporarily
const showStatus = (message) => {
  statusMessage.value = message
  setTimeout(() => {
    statusMessage.value = ''
  }, 2000)
}

// Watch for settings changes
const debounceUpdate = (() => {
  let timeoutId
  return (newSettings) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      updateSettings(newSettings)
      showStatus('Settings applied')
    }, 300)
  }
})()

onMounted(() => {
  // Sync local settings with global settings
  Object.assign(localSettings, settings.value)
})
</script>
