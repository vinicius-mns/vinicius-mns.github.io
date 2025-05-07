<script setup lang="ts">
const props = defineProps<{ x: string; y: string; size: string }>()
</script>

<template>
  <div class="ball-container"></div>
</template>

<style scoped lang="scss">
.ball-container {
  position: fixed;
  top: v-bind('props.y');
  left: v-bind('props.x');
  width: v-bind('props.size');
  aspect-ratio: 1;
  border-radius: 50%;
  // border: solid 1px white;
  pointer-events: none;

  backdrop-filter: invert(1);
}
</style>
