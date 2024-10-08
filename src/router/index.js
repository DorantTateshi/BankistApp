import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/transactions',
      name: 'transactions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TransactionsView.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('../views/ExchangeView.vue')
    },
    {
      path: '/openai',
      name: 'openai',
      component: () => import('../views/OpenAiView.vue')
    },

    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
    { path: '/signup', name: 'signup', component: () => import('../views/SignupView.vue') }
  ]
})

export default router
