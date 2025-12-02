<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import BallTrack from './components/atoms/BallTrack.vue'
import { useGlobalState } from './stores/globalState'
import IdleAnimation from './components/views/IdleAnimation.vue'
import IdleAnimation2 from './components/views/IdleAnimation2.vue'
import IdleAnimation3 from './components/views/IdleAnimation3.vue'

const { trackBall, darkMode, opacity } = useGlobalState()
const route = useRoute()

const idleId = ref(0)
const idleOpacity = computed(() => opacity.status.opacity / 100)
const darkModeClass = computed(() => darkMode.status.dark)
const classicIdle = computed(() => route.path.startsWith('/classic'))

onMounted(() => {
  const keyIdleId = 'idle-id'
  const idleIdLocalStorage = localStorage.getItem(keyIdleId)

  if (!idleIdLocalStorage) {
    const initId = Math.floor(Math.random() * 2)
    localStorage.setItem(keyIdleId, JSON.stringify(initId))
  } else {
    const id = Number(JSON.parse(idleIdLocalStorage))
    localStorage.setItem(keyIdleId, JSON.stringify(id + 1))
  }

  idleId.value = Number(idleIdLocalStorage)
})
</script>

<template>
  <div :class="['main', !darkModeClass && 'light-mode']" @mousemove="trackBall.metod.trackBall">
    <IdleAnimation class="idle" v-if="classicIdle" />

    <IdleAnimation2 class="idle" v-if="idleId % 2 !== 0 && !classicIdle" />

    <IdleAnimation3 class="idle" v-if="idleId % 2 === 0 && !classicIdle" />

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
