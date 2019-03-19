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
      component: Layout,
      children: [
        {
          path: '/index',
          name: 'index',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
          meta: {
            title: '仪表盘'
          }
        },
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
          meta: {
            title: '表单页'
          }
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
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "login" */ '@/views/user/Register.vue')
        }
      ]
    }
  ]
})
