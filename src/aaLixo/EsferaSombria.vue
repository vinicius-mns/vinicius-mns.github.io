<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let points: THREE.Points
let frameId: number
const waveSpeed = 2.5
const waveWidth = 1.5

onMounted(() => {
  // Configuração básica da cena
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 8

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value?.appendChild(renderer.domElement)

  // Criar geometria da esfera com partículas
  const particleCount = 10000
  const positions = new Float32Array(particleCount * 3)
  const radius = 5

  // Distribuir partículas na superfície da esfera
  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / particleCount)
    const theta = Math.sqrt(particleCount * Math.PI) * phi

    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi)
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  // Material customizado com shaders para controle de opacidade
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      waveSpeed: { value: waveSpeed },
      waveWidth: { value: waveWidth }
    },
    vertexShader: `
      uniform float time;
      uniform float waveSpeed;
      uniform float waveWidth;
      
      varying float vOpacity;
      
      void main() {
        vec3 pos = position;
        float wave = sin(pos.y * 0.5 + time * waveSpeed);
        float distanceToWave = abs(pos.y - wave);
        
        vOpacity = 1.0 - smoothstep(0.0, waveWidth, distanceToWave);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 2.0;
      }
    `,
    fragmentShader: `
      varying float vOpacity;
      
      void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)

  // Animação
  const animate = () => {
    frameId = requestAnimationFrame(animate)
    material.uniforms.time.value += 0.01
    points.rotation.y += 0.002
    renderer.render(scene, camera)
  }

  animate()
  window.addEventListener('resize', onWindowResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
  window.removeEventListener('resize', onWindowResize)
})

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>

<template>
  <div ref="canvasContainer" class="canvas-container"></div>
</template>

<style>
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  background: #000;
}

canvas {
  outline: none;
}
</style>
