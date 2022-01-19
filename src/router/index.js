import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowBox from '../views/ShowBox.vue'


const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ShowBox',
    name: 'ShowBox.vue',
    component: ShowBox
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router