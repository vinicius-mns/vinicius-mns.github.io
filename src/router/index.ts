import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/views/HomePage.vue'
import MainPage from '@/components/views/MainPage.vue'
import ContactMe from '@/components/views/ContactMe.vue'
import MyPojects from '@/components/views/MyPojects.vue'
import ConfigPage from '@/components/views/ConfigPage.vue'
import Project from '@/components/views/ProjectPage.vue'
import OnePage from '@/components/views/OnePage.vue'
import NoFound from '@/components/views/NoFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/classic',
      name: 'home',
      component: HomePage
    },
    {
      path: '/classic/main',
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
    },
    {
      path: '/one',
      name: 'Vinícius dev',
      component: OnePage
    },
    {
      path: '/:pathMatch(.*)*',
      component: NoFound
    }
  ]
})

router.afterEach((to) => {
  const name = to.name as string
  document.title = name
})

export default router
