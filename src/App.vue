<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import IdleAnimation from './components/views/IdleAnimation.vue'
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import BallTrack from './components/atoms/BallTrack.vue'
import { useGlobalState } from './stores/globalState'

const { trackBall, darkMode, opacity, mobile, swing } = useGlobalState()

const darkModeClass = computed(() => darkMode.status.dark)

const idleOpacity = computed(() => opacity.status.opacity / 100)

const isMobileSize = () => mobile.status.isMobileSize

const setStyleOnMobile = () => {
  if (mobile.status.isMobileSize) {
    trackBall.status.show = false
    swing.status.swing = false
  }
}

watch(isMobileSize, setStyleOnMobile)

onMounted(() => {
  window.addEventListener('resize', mobile.metod.handleMobileSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', mobile.metod.handleMobileSize)
})
</script>

<template>
  <div :class="['main', !darkModeClass && 'light-mode']" @mousemove="trackBall.metod.trackBall">
    <IdleAnimation class="idle" v-if="opacity.status.opacity > 0" />

    <RouterView />

    <BallTrack
      v-if="trackBall.status.show"
      :x="trackBall.status.x"
      :y="trackBall.status.y"
      :size="trackBall.status.size"
      class="ball-track"
    />
  </div>
</template>

<style lang="scss">
.main {
  height: 100dvh;
  width: 100dvw;
  // background-color: #1a1a1a;
  background-color: #141414;
  // background-color: black;
  // background-color: black;
  // filter: invert(1);
}

.light-mode {
  filter: invert(1);
}

.idle {
  opacity: v-bind('idleOpacity');
}
</style>
