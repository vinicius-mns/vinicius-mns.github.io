<script setup lang="ts">
import BoxBase from '../template/BoxBase.vue'
import LinkBase from '../atoms/LinkBase.vue'
const links = [
  { name: 'Projetos', link: 'Meus projetos' },
  { name: 'Contatos', link: 'Estou por ai' },
  { name: 'Configurações', link: 'Configurações' }
]
</script>

<template>
  <BoxBase class="aboutme-container">
    <div class="left">
      <div class="title">
        <h1>Vinicius Silva</h1>
        <p>Desevolvedor junior fullstack</p>
      </div>

      <nav class="links">
        <LinkBase
          class="link"
          v-for="(link, i) in links"
          :key="i"
          :to-name="link.link"
          :content="link.name"
        />
      </nav>
    </div>
  </BoxBase>
</template>

<style scoped lang="scss">
.aboutme-container {
  display: flex;

  & .left {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    box-sizing: border-box;

    & .links {
      width: fit-content;
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      & .link {
        width: 200px;
      }
    }

    & .title {
      width: fit-content;
      margin-left: 10px;
      text-wrap: nowrap;

      & h1,
      p {
        margin: 0;
      }
    }
  }

  & .config-section {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: end;

    padding: 40px;
    box-sizing: border-box;

    display: flex;
    justify-content: flex-end;
  }
}
</style>
