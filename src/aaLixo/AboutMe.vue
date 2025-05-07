<script setup lang="ts">
import { ref } from 'vue'
import BoxBase from './BoxBase.vue'
import PageTemplate from '../organisms/PageTemplate.vue'
import CheckboxBase from '../atoms/CheckboxBase.vue'

const config = ['Modo escuro', 'Opacidade', 'Track ball', 'Balanço']

const atualConfig = ref('')

const visibleConfig = ref(false)

const setAtualConfig = (v: string, close?: boolean) => {
  if (!close) {
    atualConfig.value = v

    visibleConfig.value = true
  } else {
    visibleConfig.value = false
  }
}
</script>

<template>
  <BoxBase class="aboutme-container">
    <div class="left">
      <div class="title">
        <h1>Vinicius Silva</h1>
        <p>Desevolvedor junior fullstack</p>
      </div>

      <div class="section-container">
        <p>Projetos</p>

        <p>Contato</p>
      </div>
    </div>

    <div class="right">
      <div class="section-container">
        <CheckboxBase :check="true" content="Modo escuro" />

        <p>Opacidade</p>

        <CheckboxBase :check="true" content="Track ball" />

        <CheckboxBase :check="true" content="Balanço" />
      </div>
    </div>
  </BoxBase>
</template>

<style scoped lang="scss">
.aboutme-container {
  display: flex;
  // border: none;

  & .section-container {
    width: fit-content;
    margin-top: 30px;

    & p {
      margin: 0;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }

  & .left {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    // justify-content: flex-end;
    padding: 60px;
    box-sizing: border-box;

    & .section-container {
      & p {
        width: 200px;
      }
    }

    & .title {
      width: fit-content;
      margin-left: 10px;

      & h1,
      p {
        margin: 0;
        // margin: 20px 20px;
      }
    }
  }

  & .config-template-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: end;

    padding: 60px;
    box-sizing: border-box;

    display: flex;
    justify-content: flex-end;

    & .section-container {
      margin: 0;
    }
  }
}
</style>
