<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{ check: boolean; content: string }>()

const emit = defineEmits<{
  (e: 'emit-check', check: boolean): void
}>()

const checkRef = ref(props.check)

watchEffect(() => {
  emit('emit-check', checkRef.value)
})
</script>

<template>
  <label class="checkbox-container">
    <input class="checkbox" type="checkbox" name="exemploCheckbox" value="sim" v-model="checkRef" />
    <div class="my-checkbox">
      <div v-show="checkRef" class="check"></div>
    </div>
    <p>{{ props.content }}</p>
  </label>
</template>

<style scoped lang="scss">
.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  margin: 0;
  padding: 10px;

  & p {
    margin: 0;
    padding: 0;
  }

  & .checkbox {
    display: none;
  }

  & .my-checkbox {
    width: 13px;
    aspect-ratio: 1;
    margin-right: 4px;
    border: solid 1px white;
    padding: 3px;
    box-sizing: border-box;
    // border-radius: 50%;

    & .check {
      width: 100%;
      height: 100%;
      background-color: white;
    }
  }

  &:hover {
    background-color: black;
    filter: invert(1);
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>
