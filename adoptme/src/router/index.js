import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Adopt from '../views/Adopt.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adopt',
    name: 'Adopt',
    component: Adopt
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
