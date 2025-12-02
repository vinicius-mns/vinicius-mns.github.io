<script setup lang="ts">
import MarkdownAtom from '../atoms/MarkdownAtom.vue'
import ConfigPage from './ConfigPage.vue'

const content = `
  ## inf
  - 1998
  - 27 anos

  ## Sou bom em
  - Vuejs
  - Typescript
  - Python

  ## Uso
  - Vite
  - Typescript
  - Pinia
  - windsurf Ai

  ## Conheço
  - docker
  - git

  ## Projetos
  - [ none ](https://google.com)

  ## Contato
  - <a href="https://github.com/vinicius-mns" target="_blank">
      github
    </a>
  - <a href="https://www.linkedin.com/in/vinicius-dev-junior/" target="_blank">
      Linkedin
    </a>
  - [ email ](mailto:vinicius_dev@hotmail.com)

  # Mais
  - [ versão anterior do Portifólio ](/#classic)
`
</script>

<template>
  <div class="one-page-container">
    <div class="content">
      <header>
        <h1>Vinícius Silva</h1>
        <p>Dev web</p>
      </header>

      <MarkdownAtom :content="content" />

      <ConfigPage />
    </div>
  </div>
</template>

<style scoped lang="scss">
.one-page-container {
  position: absolute;
  height: 100dvh;
  width: 100dvw;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  & .content {
    width: calc(100% - 80px);
    max-width: 1220px;
    height: fit-content;
    margin-top: 80px;
    padding-bottom: 160px;

    & header {
      & h1 {
        margin: 0;
        padding: 0;
      }

      & p {
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
