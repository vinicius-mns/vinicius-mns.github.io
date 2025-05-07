<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let sphereMesh: THREE.Mesh
let frameId: number

onMounted(() => {
  // Configuração da cena
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  // Configuração da câmera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Configuração do renderizador com anti-aliasing
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance'
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  canvasContainer.value?.appendChild(renderer.domElement)

  // Geometria mais detalhada
  const geometry = new THREE.SphereGeometry(2.8, 128, 128)

  // Material com suavização melhorada
  const material = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float time;
      
      void main() {
        vNormal = normal;
        vPosition = position;
        
        // Distorção suavizada com múltiplas frequências
        float distortion = 0.15;
        float wave1 = sin(position.y * 8.0 + time * 1.5) * 0.5;
        float wave2 = cos(position.x * 6.0 + time * 2.0) * 0.3;
        vec3 newPosition = position + normal * (wave1 + wave2) * distortion;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      
      void main() {
        // Suavização da cor com cálculo de intensidade
        float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        vec3 color = mix(vec3(0.3, 0.5, 0.8), vec3(0.8, 0.5, 0.3), intensity);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      time: { value: 0 }
    },
    wireframe: false,
    transparent: false
  })

  sphereMesh = new THREE.Mesh(geometry, material)
  scene.add(sphereMesh)

  // Controle de animação
  const animate = () => {
    frameId = requestAnimationFrame(animate)

    // Rotação suave
    sphereMesh.rotation.x += 0.012
    sphereMesh.rotation.y += 0.0015
    material.uniforms.time.value += 0.01

    renderer.render(scene, camera)
  }

  animate()
  setupResizeObserver()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
  window.removeEventListener('resize', onWindowResize)
})

const setupResizeObserver = () => {
  window.addEventListener('resize', onWindowResize, { passive: true })
}

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
  touch-action: none;
}

canvas {
  outline: none;
}
</style>
