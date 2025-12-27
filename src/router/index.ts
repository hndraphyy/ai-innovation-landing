import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home Page | AI Innovation' },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const title = (to.meta.title as string) || 'AI Innovation'
  document.title = title
  next()
})

export default router
