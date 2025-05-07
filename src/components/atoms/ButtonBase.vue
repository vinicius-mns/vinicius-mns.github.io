<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  content: string
  check: boolean
}>()

const checkClass = computed(() => (props.check ? 'check' : ''))
</script>

<template>
  <button :class="['button', checkClass]">{{ props.content }}</button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  // font-size: 16px;
}

.check {
  filter: invert(1);
  background-color: black;
}
</style>
