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
                component: () => import(/* webpackChunkName: "WorkPlace" */ '@/views/WorkPlace.vue'),
                meta: {
                    title: '计划预览',
                    key: 'dashboard'
                }
            },
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "HtmlLearn" */ '@/views/HtmlLearn.vue'),
                meta: {
                    title: 'HTML知识合集'
                }
            },
            {
                path: '/css',
                name: 'css',
                component: () => import(/* webpackChunkName: "css" */ '@/views/DesignPattern.vue'),
                meta: {
                    title: 'CSS重点笔记'
                }
            },
            {
                path: '/map',
                name: 'map',
                component: () => import(/* webpackChunkName: "map" */ '@/views/DataMap.vue'),
                meta: {
                    title: '图表应用',
                    key: 'chart'
                }
            },
        ]
    },
    {
        path: '/user',
        redirect: '/login',
        component: UserLayout,
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
        path: '/404',
        component: () => import(/* webpackChunkName: "not_found" */ '@/views/NotFound.vue')
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
                    title: '权限设置',
                    permission: ['admin']
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constRouterMap
})