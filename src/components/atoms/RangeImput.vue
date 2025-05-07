<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  initValue: number
  name: string
  limit: {
    min: number
    max: number
  }
}>()

const emit = defineEmits<{
  (e: 'emitValue', vale: number): void
}>()

const reactiveValue = ref(props.initValue)

watchEffect(() => {
  emit('emitValue', Number(reactiveValue.value))
})
</script>

<template>
  <input
    type="range"
    v-model="reactiveValue"
    :name="props.name"
    :min="props.limit.min"
    :max="props.limit.max"
    class="range"
  />
</template>

<style scoped lang="scss">
.range {
  height: 2px;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: 50%;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0);
    opacity: 100%;
  }
}
</style>
