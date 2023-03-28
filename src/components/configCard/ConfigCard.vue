<script setup lang="ts">
</script>

<template>
  <div class="container neo-card">
    <button class="close-card"><div class="a"></div><div class="b"></div></button>
    <div class="sub-container">
      <h2>Configuração</h2>
    </div>
    <div class="sub-container">
      <div><h3>Cores e estilo</h3></div>
    </div>
    <div class="sub-container">
      <h3>contato</h3>
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

    & div {
      background-color: transparent;
    }

    & .close-card {
      width: 2rem;
      height: 2rem;
      position: absolute;
      right: 0;
      background-color: transparent;
      border: none;

      & div {
        position: absolute;
        width: 100%;
        height: 0.14rem;
        border-radius: 2px;
        background-color: black;
      }
      & .a {
        transform: rotate(45deg);
      }
      & .b {
        transform: rotate(-45deg);
      }
    }

    & .sub-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
