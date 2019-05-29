import BasicLayout from '@/components/layouts/BasicLayout.vue'
import UserLayout from '@/components/layouts/UserLayout.vue'
import PageView from '@/components/layouts/PageView.vue'



export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        redirect: '/schedule',
        meta: { title: '首页' },
        component: BasicLayout,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                redirect: '/schedule',
                component: PageView,
                meta: {
                    title: '仪表盘',
                    icon: 'dashboard',
                    key: 'dashboard',
                    permission: ['dashboard']
                },
                children: [
                    {
                        path: '/schedule',
                        name: 'schedule',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "WorkPlace" */ '@/views/WorkPlace.vue'),
                        meta: {
                            title: '计划预览',
                            key: 'schedule',
                            permission: ['dashboard']
                        }
                    }
                ]
            },
            {
                path: '/html',
                name: 'html',
                component: PageView,
                meta: {
                    title: 'HTML知识合集',
                    icon: 'html5',
                    key: 'html',
                    permission: ['html']
                },
                children: [
                    {
                        path: '/tags',
                        name: 'tags',
                        component: () => import(/* webpackChunkName: "HtmlLearn" */ '@/views/HtmlLearn.vue'),
                        meta: {
                            title: 'HTML5标签',
                            key: 'tags',
                            permission: ['html']
                        }
                    }
                ]
            },
            {
                path: '/css',
                name: 'css',
                component: PageView,
                meta: {
                    title: 'CSS重点笔记',
                    icon: 'ant-design',
                    key: 'css',
                    permission: ['css']
                },
                children: [
                    {
                        path: '/scss',
                        name: 'scss',
                        component: () => import(/* webpackChunkName: "css" */ '@/views/DesignPattern.vue'),
                        meta: {
                            title: 'CSS预编译',
                            key: 'scss',
                            permission: ['css']
                        }
                    }
                ]
            },
            {
                path: '/js',
                name: 'js',
                component: PageView,
                meta: {
                    title: 'JS知识框架',
                    icon: 'chrome',
                    key: 'js',
                    permission: ['js']
                },
                children: []
            },
            {
                path: '/charts',
                name: 'charts',
                component: PageView,
                meta: {
                    title: '图表应用',
                    icon: 'area-chart',
                    key: 'charts',
                    permission: ['charts']
                },
                children: [
                    {
                        path: '/map',
                        name: 'map',
                        component: () => import(/* webpackChunkName: "map" */ '@/views/DataMap.vue'),
                        meta: {
                            title: '地图应用',
                            key: 'map',
                            permission: ['charts']
                        }
                    }
                ]
            },
            {
                path: '/controls',
                name: 'controls',
                component: PageView,
                meta: {
                    title: '权限管理',
                    icon: 'team',
                    key: 'permiss',
                    permission: ['controls']
                },
                children: [
                    {
                        path: '/test',
                        name: 'controls',
                        component: () => import(/* webpackChunkName: "controls" */ '@/views/Controls.vue'),
                        meta: {
                            title: '权限测试',
                            key: 'controls',
                            permission: ['controls']
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export const constRouterMap = [
    {
        path: '/user',
        hidden: true,
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
