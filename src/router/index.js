import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import f1_view from '../views/f1_view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path : '/about',
      name : 'about',
      component : AboutView
    },
    {
      path : '/f1',
      name : 'f1',
      component : f1_view
    }
  ]
})

export default router
