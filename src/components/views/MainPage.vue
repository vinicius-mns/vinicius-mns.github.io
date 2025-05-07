<script setup lang="ts">
import AureaTemplate from '@/components/template/AureaTemplate.vue'
import { onMounted, onUpdated, ref } from 'vue'
import { RouterView } from 'vue-router'

const title = ref('')

const links = [
  { name: 'Home', nameLink: 'home' },
  { name: 'Projetos', nameLink: 'Meus projetos' },
  { name: 'Contatos', nameLink: 'Estou por ai' },
  { name: 'Configurações', nameLink: 'Configurações' }
]

onMounted(() => {
  title.value = document.title
})

onUpdated(() => {
  title.value = document.title
})
</script>

<template>
  <AureaTemplate :title="title" :links="links">
    <RouterView />
  </AureaTemplate>
</template>

<style scoped lang="scss"></style>
