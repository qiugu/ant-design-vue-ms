import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import UserLayout from '@/components/layouts/UserLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/index',
          name: 'index',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
        },
        {
          path: '/pattern',
          name: 'pattern',
          component: () => import(/* webpackChunkName: "home" */ './views/DesignPattern.vue')
        }
      ]
    },  
    {
      path: '/user',
      redirect: '/login',
      component: UserLayout,
      hidden: true,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')
        }
      ]
    }
  ]
})
