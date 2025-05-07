<script setup lang="ts"></script>

<template>
  <button class="button-close">
    <div class="cross one"></div>
    <div class="cross two"></div>
  </button>
</template>

<style scoped lang="scss">
.button-close {
  height: 30px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & .cross {
    position: absolute;
    width: 28px;
    height: 1px;
    background-color: white;
  }

  & .one {
    transform: rotate(45deg);
  }

  & .two {
    transform: rotate(-45deg);
  }
}
</style>
