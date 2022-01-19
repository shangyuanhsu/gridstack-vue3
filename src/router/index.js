import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowBox from '../views/ShowBox.vue'
import EditBox from '../views/EditBox.vue'


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
    path: '/EditBox',
    name: 'EditBox.vue',
    component: EditBox
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router