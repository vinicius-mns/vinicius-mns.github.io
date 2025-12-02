<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let points: THREE.Points
let frameId: number

onMounted(() => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x141414)

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 4

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value?.appendChild(renderer.domElement)

  const particleCount = 140000
  const positions = new Float32Array(particleCount * 3)
  const radius = 5

  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / particleCount)
    const theta = Math.sqrt(particleCount * Math.PI) * phi

    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi)
    positions[i * 3.1 + 1] = radius * Math.sin(theta) * Math.sin(phi)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 }
    },
    vertexShader: `
      uniform float time;
      varying float vOpacity;

      float hash(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.1,0.2,0.3));
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);

        float n = mix(
          mix(
            mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x),
            f.y
          ),
          mix(
            mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x),
            f.y
          ),
          f.z
        );

        return n;
      }

      void main() {
        vec3 pos = position;

        float n1 = noise(pos * 0.04 + time * 1.4);
        float n2 = noise(pos * 0.06 + time * 0.8);
        float n3 = noise(pos * 0.22 + time * 1.0);

        float combined = (n1 * 0.6 + n2 * 0.3 + n3 * 0.1);
        float flamePush = combined * 0.6;

        pos += pos * 0.0 + (combined * 1.6);

        float upward = (pos.y + 1.0) * 0.1;

        vOpacity = clamp(combined * 1.2 + upward, 0.0, 1.0);

        float flicker = noise(pos * 2.5 + time * 5.0) * 0.5 + 0.5;
        vOpacity *= flicker;

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
  points.position.y = -1
  scene.add(points)

  const animate = () => {
    frameId = requestAnimationFrame(animate)
    material.uniforms.time.value += 0.002

    points.rotation.y = 3.804
    points.rotation.x = 1.013
    points.rotation.z = 2.043

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
}

canvas {
  outline: none;
}
</style>
