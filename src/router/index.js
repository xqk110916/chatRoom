import Vue from 'vue'
import VueRouter from 'vue-router'

import msg from '@/views/message'
import linkman from '@/views/linkman'
import dynamic from '@/views/dynamic'

import add from '@/views/addFriend'
import chat from '@/views/chat'

import login from '@/views/login/login'
import register from '@/views/login/register'
import resetPassword from '@/views/login/resetPassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: {
      index: -1,
      isShow: true,
    },
    component: linkman
  },
  {
    path: '/msg',
    meta: {
      index: 0,
      isShow: true,
    },
    component: msg
  },
  {
    path: '/dynamic',
    meta: {
      index: 1,
      isShow: true,
    },
    component: dynamic
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/resetPassword',
    component: resetPassword
  },
  {
    path: '/add',
    component: add
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
