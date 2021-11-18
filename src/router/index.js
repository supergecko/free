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
    path: '/orderHire',
    name: 'orderHire',
    component: () => import('@/views/order/hire')
  },
  {
    path: '/releaseTask',
    name: 'releaseTask',
    component: () => import('@/views/releaseTask')
  },
  {
    path: '/orderReceiving',
    name: 'orderReceiving',
    component: () => import('@/views/order/receiving')
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
    path: '/workerInfo',
    name: 'workerInfo',
    component: () => import('@/views/worker')
  },
  {
    path: '/workerTeam',
    name: 'workerTeam',
    component: () => import('@/views/worker/workerTeam')
  },
  {
    path: '/workerList',
    name: 'workerList',
    component: () => import('@/views/worker/workerList')
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
