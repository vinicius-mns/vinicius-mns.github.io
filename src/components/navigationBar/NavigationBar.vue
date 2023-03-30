<script setup lang="ts">
import { RouterLink } from 'vue-router'

const mockLinks = [
  'Quem sou eu',
  'O que eu sei fazer',
  'Meus projetos',
  'Explicando portifolio',
  'Mais alguma coisa',
  'Outro coisa',
  'Feedbacks',
  'Outro link',
]
</script>

<template>
  <div class="side-bar">
    <nav>
      <ul>
        <li v-for="(link, i) of mockLinks" :key="i">
          <RouterLink to="/"><p>{{ link }}</p></RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.side-bar {
  width: 98%;
  height: 100vh;
  display: flex;
  align-items: center;
  & nav {
    width: 100%;
    & ul {
      width: 100%;
      height: 25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: end;
      list-style: none;
    }
  }
}
</style>
