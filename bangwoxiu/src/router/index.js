import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'

import Repair from '@/components/Repair/repair'
import Clearn from '@/components/Clearn/clearn'
import Move from '@/components/Move/move'
import Login from '@/components/Login/login'
import Register from '@/components/Register/register'
import Index from '@/components/Index/index'
import Main from '@/components/Main/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/foo/repair',
      name: 'repair',
      component: Repair
    },
    {
      path: '/foo/clearn',
      name: 'clearn',
      component: Clearn
    },
    {
      path: '/foo/move',
      name: 'move',
      component: Move
    },
    {
      path: '/foo/login',
      name: 'login',
      component: Login
    },
    {
      path: '/foo/register',
      name: 'register',
      component: Register
    },
    {
      path: '/foo/index',
      name: 'index',
      component: Index
    },
    {
      path: '/foo/main',
      name: 'main',
      component: Main
    }
  ]
})
