import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useAuth } from '../composables/useAuth'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

const { user, isAuthenticated } = useAuth()
router.beforeEach((to, from, next) => {
  const auth = to.meta?.auth ?? true
  if (auth === 'excluded') return next()
  if (auth === 'guest') return isAuthenticated.value ? next({ path: '/' }) : next()
  if (!user.value) return next({ path: '/login' })
  next()
})

