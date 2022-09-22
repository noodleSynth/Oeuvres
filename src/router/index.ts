import { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import RepoView from '../views/RepoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/read/:repo/:file(.*)*",
      component: RepoView,
      name: "repoPage",
    }
  ]
})

export default router
