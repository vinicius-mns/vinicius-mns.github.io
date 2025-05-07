<script setup lang="ts">
import { ref } from 'vue'
import { onMounted, computed } from 'vue'

const show = ref(0)

const displayNone = computed(() => (show.value >= 3 ? '0px' : '100dvh'))

const initShow = () => {
  const intervalId = setInterval(() => {
    show.value = show.value + 1
  }, 1000)

  if (show.value >= 3) {
    clearInterval(intervalId)
    console.log(show.value)
  }
}

onMounted(initShow)
</script>

<template>
  <div class="intro-container">
    <p v-show="show === 0">Batata frita</p>
    <p v-show="show === 1">Repolho</p>
    <p v-show="show === 2">Outra coisa</p>
  </div>
</template>

<style scoped lang="scss">
.intro-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: v-bind('displayNone');
  width: 100dvw;
  background-color: #1a1a1a;
  background-color: transparent;

  & p {
    transition: all 0.2s;
    background-color: #1a1a1a;
    padding: 10px;
  }
}
</style>
