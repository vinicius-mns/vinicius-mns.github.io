<script setup lang="ts">
import { useGlobalStyle } from '@/stores/globalStyle'
import { useToggleCard } from '@/stores/toddleCards';
const style = useGlobalStyle()
const toggle = useToggleCard()
</script>

<template>
  <div class="container" :style="style.cardStyle" v-if="toggle.settings">
    <div class="sub-card title">
      <h2>Configuração</h2>
    </div>
    <div class="sub-card config-style">

    </div>
    <div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  width: 600px;
  max-width: 94%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .sub-card {
    width: 90%;
  }
  & .title {
    background-color: red;
    display: flex;
    justify-content: center;
  }
}
</style>
