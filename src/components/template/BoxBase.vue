<script setup lang="ts">
import { useGlobalState } from '@/stores/globalState'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const { swing } = useGlobalState()

const sizes = {
  desktop: {
    left: '60px',
    top: '68px',
    width: 'calc(100dvw - 60px * 2)',
    height: 'calc(100dvh - 68px * 2)'
  },
  mobile: {
    left: '10px',
    top: '28px',
    width: 'calc(100dvw - 10px * 2)',
    height: 'calc(100dvh - 48px * 2)'
  }
}

const size = reactive({ ...sizes.desktop })

const x = ref('0deg')

const y = ref('0deg')

const handleResize = () => {
  const screen = window.innerWidth
  const isMobile = screen < 768

  isMobile ? Object.assign(size, sizes.mobile) : Object.assign(size, sizes.desktop)
}

const handlePerspective = (mouse: MouseEvent) => {
  const midTop = window.innerHeight / 2
  const midLeft = window.innerWidth / 2
  const mouseX = mouse.clientX - midLeft
  const mouseY = mouse.clientY - midTop

  x.value = `${mouseX / -260}deg`
  y.value = `${mouseY / 180}deg`
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div :class="['box-container', { swing: swing.status.swing }]" @mousemove="handlePerspective">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$top: v-bind('size.top');
$left: v-bind('size.left');
$width: v-bind('size.width');
$height: v-bind('size.height');

.box-container {
  position: fixed;
  top: calc($top - 10px);
  left: $left;
  // height: $height;
  box-sizing: border-box;
  border: solid 1px white;

  opacity: 0;
  width: 0;
  height: 0;
  animation: init 0.3s forwards;
}

.swing {
  transition: all 0.3s ease-out;
  transform-style: preserve-3d;
  transform: perspective(1200px) rotateX(v-bind('y')) rotateY(v-bind('x'));
}

@keyframes init {
  to {
    opacity: 1;
    width: $width;
    height: $height;
  }
}
</style>
