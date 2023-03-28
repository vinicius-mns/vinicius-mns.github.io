<script setup lang="ts">
const mockLinks = [
  'Quem sou eu',
  'O que eu sei fazer',
  'Meus projetos',
  'Por que do meu portifolio ser assim',
  'Mais alguma coisa',
  'Outro coisa',
  'Feedbacks',
  'Outro link',
]
</script>

<template>
  <div class="router-links">
    <button v-for="text in mockLinks" :key="text"><p>{{ text }}</p></button>
  </div>
</template>

<style scoped lang="scss">
.router-links {
  width: 1400px;
  height: 100%;
  display: flex;
  align-items: center;

  & button {
    height: 2rem;
    margin-left: 2rem;

    & p {
      background-color: transparent;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
