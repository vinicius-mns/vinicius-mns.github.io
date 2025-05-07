<script setup lang="ts">
const props = defineProps<{ msg: string }>()
</script>

<template>
  <div class="message-container">
    <p>{{ props.msg }}</p>
  </div>
</template>

<style scoped lang="scss">
.message-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  pointer-events: none;

  & p {
    background-color: #1a1a1a;
    border: solid 1px white;
    padding: 10px;
  }

  transform: scale(0);
  animation: float 0.2s forwards;
}

@keyframes float {
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
