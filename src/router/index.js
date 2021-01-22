import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.useContext(VueRouter)

const routes = [
  // Route principal : page d'inscription
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  // Route : page de connexion
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  // Route : page mot de passe oublie
  {
    path: '/fortgot-password',
    name: 'fortgot-password',
    component: () => import('../components/ForgotPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
