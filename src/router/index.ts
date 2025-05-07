import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/views/HomePage.vue'
import MainPage from '@/components/views/MainPage.vue'
import ContactMe from '@/components/views/ContactMe.vue'
import MyPojects from '@/components/views/MyPojects.vue'
import ConfigPage from '@/components/views/ConfigPage.vue'
import Project from '@/components/views/ProjectPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage,
      children: [
        {
          path: 'contact',
          name: 'Estou por ai',
          component: ContactMe,
          meta: { title: 'Estou por ai' }
        },
        {
          path: 'projects',
          name: 'Meus projetos',
          component: MyPojects,
          children: [
            {
              path: 'project/:id',
              name: 'project',
              component: Project
            }
          ]
        },
        {
          path: 'config',
          name: 'Configurações',
          component: ConfigPage
        }
      ]
    }
  ]
})

router.afterEach((to) => {
  const name = to.name as string
  document.title = name
})

export default router
