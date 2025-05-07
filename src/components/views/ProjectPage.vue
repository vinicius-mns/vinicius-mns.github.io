<script setup lang="ts">
import { useFakeApi } from '@/stores/fakeApi'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownAtom from '@/components/atoms/MarkdownAtom.vue'
import ButtonClose from '../atoms/ButtonClose.vue'

const router = useRouter()
const fakeApi = useFakeApi()

const id = useRoute().params.id

const projet = ref({ content: '' })

const setTitle = (p: { title: string }) => {
  document.title = p.title
}

const setContent = (p: { content: string }) => {
  projet.value.content = p.content
}

const close = () => {
  router.push({ name: 'Meus projetos' })
}

onMounted(() => {
  const p = fakeApi.projects().getProjectId(id as string)
  if (!p) return

  setTitle(p)
  setContent(p)
})
</script>

<template>
  <div class="my-projects-container">
    <header class="header">
      <ButtonClose @click="close" />
    </header>

    <div class="content">
      <MarkdownAtom class="markdown" :content="projet.content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-projects-container {
  $margin: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .content {
    width: calc(100% - 40px);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .markdown {
      width: 100%;
      max-width: 840px;
    }
  }

  & header {
    height: 60px;
    width: calc(100% - 40px);
    max-width: 840px;
    top: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
}
</style>
