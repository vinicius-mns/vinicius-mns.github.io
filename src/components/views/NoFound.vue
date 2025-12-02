<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <p>404 not found</p>
    <a href="/#one">Voltar</a>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    background-color: #141414;
    border: solid 1px white;
    padding: 10px;
  }
}
</style>
