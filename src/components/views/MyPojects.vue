<script setup lang="ts">
import { computed, markRaw, onMounted, ref } from 'vue'
import LinkBase2 from '@/components/atoms/LinkBase2.vue'
import ColumnsList from '@/components/organisms/ColumnsList.vue'
import { RouterView, useRoute } from 'vue-router'
import { useFakeApi } from '@/stores/fakeApi'

const route = useRoute()

const fakeApi = useFakeApi()

const createLink = (content: string, id: string) => {
  return {
    component: markRaw(LinkBase2),
    props: { toName: 'project', content, params: { id } }
  }
}

const links = ref<{ component: any; props: any }[]>([])

const isProjectRoute = computed(() => route.name === 'Meus projetos')

onMounted(() => {
  const projects = fakeApi.projects().getProjects()

  const apiLinks = projects.map((p) => createLink(p.title, p.id))

  links.value = apiLinks
})
</script>

<template>
  <div class="my-projects-container">
    <ColumnsList v-if="isProjectRoute" :components="links" />

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.my-projects-container {
  width: 100%;
  height: 100%;
}
</style>
