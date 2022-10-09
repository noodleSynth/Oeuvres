import HomeViewVue from '@/views/HomeView.vue'
import { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import RepoView from '@/views/RepoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeViewVue,
      name: "home"
    },
    {
      path: "/read/:repo/:file(.*)*",
      component: RepoView,
      name: "repo",
    },
  ]
})

export default router
