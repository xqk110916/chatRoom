import Vue from 'vue'
import VueRouter from 'vue-router'

import msg from '@/views/message'
import linkman from '@/views/linkman'
import dynamic from '@/views/dynamic'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: linkman
  },
  {
    path: '/msg',
    component: msg
  },
  {
    path: '/dynamic',
    component: dynamic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
