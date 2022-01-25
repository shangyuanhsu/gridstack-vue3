import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowBox from '../views/ShowBox.vue'
import NewBox from '../views/NewBox.vue'


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
  {
    path: '/NewBox',
    name: 'NewBox.vue',
    component: NewBox
  },

]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router