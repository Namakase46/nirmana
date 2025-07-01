import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export function use3DScene(canvasContainer) {
  // State
  const scene = ref(null)
  const camera = ref(null)
  const renderer = ref(null)
  const controls = ref(null)
  const isLoading = ref(true)
  const fps = ref(0)
  const memoryUsage = ref(0)

  const settings = ref({
    boardColor: 0xa4846a,
    boardSize: 42,
    boardHeight: 2,
    baseColor: 0xffffff,
    colorScheme: 'custom',
    colorVariation: 0.7,
    brightness: 0.8,
    metalness: 0.8,
    headSizeRatio: 2.0,
    nailGrid: 41,
    minNailHeight: 1,
    maxNailHeight: 5,
    nailRadius: 0.1,
    edgeMargin: 0.5,
    topMargin: 0,
    autoRotate: false,
    pattern: 'fingerprint',
    patternIntensity: 1.0,
    patternScale: 4,
    nailDetail: 'medium',
    lightIntensity: 2.0,
    lightContrast: 2.0,
    nailSpacing: 1.0,
    spacingDistribution: 'uniform'
  })

  // Pattern functions
  const patterns = {
    fingerprint: (x, y, gridSize, scale, intensity) => {
      const centerX = gridSize / 2
      const centerY = gridSize / 2
      const dx = x - centerX
      const dy = y - centerY
      const dist = Math.sqrt(dx * dx + dy * dy) / (gridSize / 2)
      const angle = Math.atan2(dy, dx)

      const rings = Math.sin(dist * scale * 2) * 0.5 + 0.5
      const ridges = Math.sin(angle * 8 + dist * scale * 4) * 0.3 + 0.7

      return Math.max(0.1, rings * ridges * intensity)
    },

    diamond: (x, y, gridSize, scale, intensity) => {
      const centerX = gridSize / 2
      const centerY = gridSize / 2
      const dx = Math.abs(x - centerX)
      const dy = Math.abs(y - centerY)
      const dist = (dx + dy) / (gridSize / 2)

      return Math.max(0.1, (1 - dist) * intensity)
    },

    waves: (x, y, gridSize, scale, intensity) => {
      const normalizedX = x / gridSize
      const normalizedY = y / gridSize
      const wave = Math.sin(normalizedX * scale * Math.PI) * Math.sin(normalizedY * scale * Math.PI)

      return Math.max(0.1, (wave * 0.5 + 0.5) * intensity)
    },

    concentric: (x, y, gridSize, scale, intensity) => {
      const centerX = gridSize / 2
      const centerY = gridSize / 2
      const dx = x - centerX
      const dy = y - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)

      return Math.max(0.1, (Math.cos(dist / scale * Math.PI) * 0.5 + 0.5) * intensity)
    },

    spiral: (x, y, gridSize, scale, intensity) => {
      const centerX = gridSize / 2
      const centerY = gridSize / 2
      const dx = x - centerX
      const dy = y - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)

      return Math.max(0.1, (Math.cos(dist / scale - angle * 2) * 0.5 + 0.5) * intensity)
    }
  }

  // Color utilities
  const colorUtils = {
    hslToHex: (h, s, l) => {
      l /= 100
      const a = s * Math.min(l, 1 - l) / 100
      const f = n => {
        const k = (n + h / 30) % 12
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color).toString(16).padStart(2, '0')
      }
      return `#${f(0)}${f(8)}${f(4)}`
    },

    generateColorScheme: (baseColor, scheme, count) => {
      const colors = []
      const baseHue = (baseColor >> 16) & 0xff

      switch (scheme) {
        case 'rainbow':
          for (let i = 0; i < count; i++) {
            const hue = (i / count) * 360
            colors.push(parseInt(colorUtils.hslToHex(hue, 70, 50).slice(1), 16))
          }
          break
        case 'monochromatic':
          for (let i = 0; i < count; i++) {
            const lightness = 30 + (i / count) * 40
            colors.push(parseInt(colorUtils.hslToHex(baseHue, 70, lightness).slice(1), 16))
          }
          break
        default:
          colors.push(baseColor)
      }

      return colors
    }
  }

  let frameCount = 0
  let lastTime = 0
  let board, nailInstancedMesh, nailHeadInstancedMesh
  let lights = []

  // Methods
  const initScene = () => {
    if (!canvasContainer.value) return

    // Create scene
    scene.value = new THREE.Scene()
    scene.value.background = new THREE.Color(0xf0f0f0)

    // Create camera
    camera.value = new THREE.PerspectiveCamera(
      75,
      canvasContainer.value.clientWidth / canvasContainer.value.clientHeight,
      0.1,
      1000
    )
    camera.value.position.set(30, 30, 30)

    // Create renderer
    renderer.value = new THREE.WebGLRenderer({ antialias: true })
    renderer.value.setSize(
      canvasContainer.value.clientWidth,
      canvasContainer.value.clientHeight
    )
    renderer.value.shadowMap.enabled = true
    renderer.value.shadowMap.type = THREE.PCFSoftShadowMap

    canvasContainer.value.appendChild(renderer.value.domElement)

    // Add OrbitControls if available
    if (window.THREE && window.THREE.OrbitControls) {
      controls.value = new window.THREE.OrbitControls(camera.value, renderer.value.domElement)
      controls.value.enableDamping = true
      controls.value.autoRotate = settings.value.autoRotate
    }

    setupLighting()
    createBoard()
    createNails()

    isLoading.value = false
  }

  const setupLighting = () => {
    // Clear existing lights
    lights.forEach(light => scene.value.remove(light))
    lights = []

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.value.add(ambientLight)
    lights.push(ambientLight)

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, settings.value.lightIntensity)
    directionalLight.position.set(50, 50, 50)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.value.add(directionalLight)
    lights.push(directionalLight)
  }

  const createBoard = () => {
    if (board) {
      scene.value.remove(board)
    }

    const geometry = new THREE.BoxGeometry(
      settings.value.boardSize,
      settings.value.boardHeight,
      settings.value.boardSize
    )
    const material = new THREE.MeshLambertMaterial({ color: settings.value.boardColor })
    board = new THREE.Mesh(geometry, material)
    board.position.y = -settings.value.boardHeight / 2
    board.receiveShadow = true
    scene.value.add(board)
  }

  const createNailGeometry = () => {
    const detail = settings.value.nailDetail
    let segments = 8

    if (detail === 'low') segments = 6
    else if (detail === 'high') segments = 16

    return new THREE.CylinderGeometry(
      settings.value.nailRadius,
      settings.value.nailRadius,
      1, // Height will be scaled per instance
      segments
    )
  }

  const createNailHeadGeometry = () => {
    const detail = settings.value.nailDetail
    let segments = 8

    if (detail === 'low') segments = 6
    else if (detail === 'high') segments = 16

    return new THREE.CylinderGeometry(
      settings.value.nailRadius * settings.value.headSizeRatio,
      settings.value.nailRadius * settings.value.headSizeRatio,
      0.2,
      segments
    )
  }

  const createNails = () => {
    // Remove existing nails
    if (nailInstancedMesh) {
      scene.value.remove(nailInstancedMesh)
      nailInstancedMesh.geometry.dispose()
      nailInstancedMesh.material.dispose()
    }
    if (nailHeadInstancedMesh) {
      scene.value.remove(nailHeadInstancedMesh)
      nailHeadInstancedMesh.geometry.dispose()
      nailHeadInstancedMesh.material.dispose()
    }

    const gridSize = settings.value.nailGrid
    const spacing = settings.value.nailSpacing
    const instanceCount = gridSize * gridSize

    // Create nail shafts
    const nailGeometry = createNailGeometry()
    const nailMaterial = new THREE.MeshLambertMaterial({
      color: 0x888888,
      metalness: settings.value.metalness
    })

    nailInstancedMesh = new THREE.InstancedMesh(nailGeometry, nailMaterial, instanceCount)
    nailInstancedMesh.castShadow = true

    // Create nail heads
    const headGeometry = createNailHeadGeometry()
    const headMaterial = new THREE.MeshLambertMaterial({
      color: 0x666666,
      metalness: settings.value.metalness
    })

    nailHeadInstancedMesh = new THREE.InstancedMesh(headGeometry, headMaterial, instanceCount)
    nailHeadInstancedMesh.castShadow = true

    // Generate nail positions and heights
    const matrix = new THREE.Matrix4()
    const headMatrix = new THREE.Matrix4()
    const colors = colorUtils.generateColorScheme(
      settings.value.baseColor,
      settings.value.colorScheme,
      instanceCount
    )

    let index = 0
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        // Calculate position
        const posX = (x - gridSize / 2) * spacing
        const posZ = (z - gridSize / 2) * spacing

        // Calculate height based on pattern
        const patternFunc = patterns[settings.value.pattern] || patterns.fingerprint
        const heightFactor = patternFunc(x, z, gridSize, settings.value.patternScale, settings.value.patternIntensity)
        const nailHeight = settings.value.minNailHeight +
          (settings.value.maxNailHeight - settings.value.minNailHeight) * heightFactor

        // Set nail shaft transform
        matrix.makeScale(1, nailHeight, 1)
        matrix.setPosition(posX, nailHeight / 2, posZ)
        nailInstancedMesh.setMatrixAt(index, matrix)

        // Set nail head transform
        headMatrix.makeScale(1, 1, 1)
        headMatrix.setPosition(posX, nailHeight + 0.1, posZ)
        nailHeadInstancedMesh.setMatrixAt(index, headMatrix)

        // Set color variation
        if (settings.value.colorScheme !== 'custom') {
          const color = new THREE.Color(colors[index % colors.length])
          nailInstancedMesh.setColorAt(index, color)
          nailHeadInstancedMesh.setColorAt(index, color.clone().multiplyScalar(0.8))
        }

        index++
      }
    }

    nailInstancedMesh.instanceMatrix.needsUpdate = true
    nailHeadInstancedMesh.instanceMatrix.needsUpdate = true

    scene.value.add(nailInstancedMesh)
    scene.value.add(nailHeadInstancedMesh)
  }

  const updatePerformanceStats = () => {
    frameCount++
    const currentTime = performance.now()

    if (currentTime - lastTime >= 1000) {
      fps.value = Math.round((frameCount * 1000) / (currentTime - lastTime))
      frameCount = 0
      lastTime = currentTime

      // Update memory usage
      if (performance.memory) {
        memoryUsage.value = Math.round(performance.memory.usedJSHeapSize / 1048576)
      }
    }
  }

  const animate = () => {
    requestAnimationFrame(animate)

    updatePerformanceStats()

    if (controls.value) {
      controls.value.update()
    }

    if (renderer.value && scene.value && camera.value) {
      renderer.value.render(scene.value, camera.value)
    }
  }

  const onWindowResize = () => {
    if (!canvasContainer.value || !camera.value || !renderer.value) return

    camera.value.aspect = canvasContainer.value.clientWidth / canvasContainer.value.clientHeight
    camera.value.updateProjectionMatrix()
    renderer.value.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  }

  const takeScreenshot = () => {
    if (!renderer.value) return

    const link = document.createElement('a')
    link.download = 'nirmana-3d-screenshot.png'
    link.href = renderer.value.domElement.toDataURL()
    link.click()
  }

  const updateSettings = (newSettings) => {
    Object.assign(settings.value, newSettings)

    if (newSettings.lightIntensity !== undefined) {
      setupLighting()
    }

    if (newSettings.boardColor !== undefined || newSettings.boardSize !== undefined) {
      createBoard()
    }

    // Recreate nails if any nail-related settings changed
    const nailSettings = [
      'nailGrid', 'pattern', 'patternIntensity', 'patternScale',
      'minNailHeight', 'maxNailHeight', 'nailRadius', 'headSizeRatio',
      'colorScheme', 'baseColor', 'nailDetail', 'metalness', 'nailSpacing'
    ]

    if (nailSettings.some(key => newSettings[key] !== undefined)) {
      createNails()
    }

    if (controls.value && newSettings.autoRotate !== undefined) {
      controls.value.autoRotate = newSettings.autoRotate
    }
  }

  // Lifecycle
  onMounted(() => {
    // Load OrbitControls
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/three@0.178.0/examples/js/controls/OrbitControls.js'
    script.onload = () => {
      initScene()
      animate()
    }
    document.head.appendChild(script)

    window.addEventListener('resize', onWindowResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize)
    if (renderer.value) {
      renderer.value.dispose()
    }
  })

  return {
    scene,
    camera,
    renderer,
    controls,
    isLoading,
    settings,
    fps,
    memoryUsage,
    patterns: Object.keys(patterns),
    initScene,
    createNails,
    updateSettings,
    takeScreenshot,
    onWindowResize
  }
}
