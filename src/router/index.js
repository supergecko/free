import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/seek',
    name: 'seek',
    component: () => import('@/views/seek')
  },
  {
    path: '/nextStep',
    name: 'nextStep',
    component: () => import('@/views/nextStep')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/views/userInfo')
  },
  {
    path: '/userForm',
    name: 'userForm',
    component: () => import('@/views/userInfo/userForm')
  }
]

const router = new VueRouter({
  mode: 'history', // history 模式
  routes
})

export default router
