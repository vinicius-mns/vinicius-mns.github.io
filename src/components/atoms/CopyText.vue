<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  content: string
  textToCopy: string
}>()

const showCopy = ref(false)

const message = ref('')

const copy = () => {
  navigator.clipboard.writeText(props.textToCopy)
  message.value = 'Copiado'
  showCopy.value = false

  setTimeout(() => {
    message.value = ''
  }, 1300)
}

const show = (v: boolean) => (showCopy.value = v)
</script>

<template>
  <div class="text-to-copy-container" @mouseenter="show(true)" @mouseleave="show(false)">
    <p>{{ props.content }}</p>

    <div class="text-to-copy" v-show="showCopy && !message">
      <p>{{ props.textToCopy }}</p>
      <button @click="copy">Copiar</button>
    </div>

    <div class="text-to-copy" v-show="message">
      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-to-copy-container {
  cursor: pointer;

  & p {
    margin: 0;
    padding: 0;
  }

  & .text-to-copy {
    position: absolute;
    border: solid 1px white;
    padding: 10px;
    // display: none;

    & button {
      margin-top: 4px;
      border: solid 1px white;
      background-color: transparent;
      color: white;
    }
  }

  & .message {
    // margin: 20px;
  }
}
</style>
