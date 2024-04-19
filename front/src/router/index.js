import { createRouter, createWebHashHistory } from 'vue-router'
import MyView from "../views/MyView.vue"
import CardComponent from '@/views/CardComponent.vue';
import ParentComponent from '@/views/ParentComponent.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'

const routes = [
  {
    path:'/myview',
    name:'myview',
    component:MyView
  },
  {
    path: '/card',
    name: 'Card',
    component: CardComponent
  },
  {
    path: '/card1',
    name: 'Card1',
    component: ParentComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
