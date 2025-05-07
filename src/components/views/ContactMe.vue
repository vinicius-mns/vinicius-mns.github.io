<script setup lang="ts">
import CopyText from '@/components/atoms/CopyText.vue'

const linkedin = { name: 'Linkedin', link: 'https://www.linkedin.com/in/vinicius-dev-junior/' }
const github = { name: 'Github', link: 'https://github.com/vinicius-mns' }
const email = 'vinicius_dev@hotmail.com'

const links = [linkedin, github]
</script>

<template>
  <div class="contactme-container">
    <a v-for="(link, i) in links" :key="i" :href="link.link" target="_blank">{{ link.name }}</a>
    <CopyText content="Email" :text-to-copy="email" class="email" />
  </div>
</template>

<style scoped lang="scss">
.contactme-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & a {
    margin: 0;
    color: white;
  }

  & .email {
    margin-top: 8px;
  }
}
</style>
