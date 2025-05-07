<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let points: THREE.Points
let frameId: number

// const noiseScale = 0.5
// const waveSpeed = 0.8
// const waveWidth = 0.3

// Parâmetros ajustáveis
const noiseScale = 0.4
const waveSpeed = 0.6
const waveWidth = 0.4

onMounted(() => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a1a)

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 8

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value?.appendChild(renderer.domElement)

  const particleCount = 100000
  const positions = new Float32Array(particleCount * 3)
  const radius = 6.8

  // Distribuição esférica
  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / particleCount)
    const theta = Math.sqrt(particleCount * Math.PI) * phi

    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi)
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      noiseScale: { value: noiseScale },
      waveSpeed: { value: waveSpeed },
      waveWidth: { value: waveWidth }
    },
    vertexShader: `
      uniform float time;
      uniform float noiseScale;
      uniform float waveSpeed;
      uniform float waveWidth;
      
      varying float vOpacity;
      
      // Função de noise simplificada
      float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
      
      float noise(vec3 p){
          vec3 a = floor(p);
          vec3 d = p - a;
          d = d * d * (3.0 - 2.0 * d);

          vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
          vec4 k1 = perm(b.xyxy);
          vec4 k2 = perm(k1.xyxy + b.zzww);

          vec4 c = k2 + a.zzzz;
          vec4 k3 = perm(c);
          vec4 k4 = perm(c + 1.0);

          vec4 o1 = fract(k3 * (1.0 / 41.0));
          vec4 o2 = fract(k4 * (1.0 / 41.0));

          vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
          vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
          
          return o4.y * d.y + o4.x * (1.0 - d.y);
      }
      
      void main() {
          vec3 pos = position;
          
          // Direção da onda
          vec3 waveDir = normalize(vec3(0.0, 1.0, 0.5));
          
          // Valor de noise animado
          float n = noise(vec3(
              dot(pos, waveDir) * noiseScale + time * waveSpeed,
              pos.y * 0.3,
              pos.z * 0.3
          ));
          
          // Mapear o noise para onda progressiva
          float wave = smoothstep(0.4, 0.6, n);
          float distanceToWave = abs(dot(normalize(pos), waveDir) - wave);
          
          // Suavizar a transição
          vOpacity = 1.0 - smoothstep(0.0, waveWidth, distanceToWave);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = 1.0;
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
  points.position.y = -3

  scene.add(points)

  const animate = () => {
    frameId = requestAnimationFrame(animate)
    material.uniforms.time.value += 0.01
    points.rotation.y += 0.001
    points.rotation.x += 0.0001
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
  /* opacity: 0.4; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  /* background: red; */
}

canvas {
  outline: none;
}
</style>
