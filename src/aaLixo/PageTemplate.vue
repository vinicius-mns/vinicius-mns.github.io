<script setup lang="ts"></script>

<template>
  <div class="page-container">
    <div class="box">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;

  padding: 60px;
  padding-bottom: 80px;
  box-sizing: border-box;

  & .box {
    border: solid 1px white;

    width: 0;
    height: 100%;
    overflow: auto;

    opacity: 0;
    animation: init 0.3s forwards;
  }
}

@keyframes init {
  to {
    opacity: 1;
    width: 100%;
  }
}
</style>
