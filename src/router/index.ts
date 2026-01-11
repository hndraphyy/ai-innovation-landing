import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home Page | AI Innovation' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'About Page | AI Innovation' },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const title = (to.meta.title as string) || 'AI Innovation'
  document.title = title
  next()
})

export default router
