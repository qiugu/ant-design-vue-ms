import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/components/layouts/BasicLayout.vue'
import UserLayout from '@/components/layouts/UserLayout.vue'

Vue.use(Router)

export const constRouterMap = [
    {
        path: '/',
        redirect: '/index',
        component: BasicLayout,
        children: [
            {
                path: '/index',
                name: 'index',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
                meta: {
                    title: '仪表盘'
                }
            },
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
                meta: {
                    title: '表单页'
                }
            },
            {
                path: '/pattern',
                name: 'pattern',
                component: () => import(/* webpackChunkName: "pattern" */ '@/views/DesignPattern.vue')
            },
            {
                path: '/map',
                name: 'map',
                component: () => import(/* webpackChunkName: "map" */ '@/views/DataMap.vue'),
                meta: {
                    title: '地图组件'
                }
            },
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
    },
    {
        path: '*',
        redirect: '/not_found',
        component: () => import(/* webpackChunkName: "not_found" */ '@/views/NotFound.vue'),
        hidden: true
    }
]

export const asyncRouterMap = [
    {
        path: '/',
        redirect: '/index',
        component: BasicLayout,
        children: [
            {
                path: '/controls',
                name: 'controls',
                component: () => import(/* webpackChunkName: "controls" */ '@/views/Controls.vue'),
                meta: {
                    title: '权限设置'
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/not_found',
        component: () => import(/* webpackChunkName: "not_found" */ '@/views/NotFound.vue'),
        hidden: true
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constRouterMap
})