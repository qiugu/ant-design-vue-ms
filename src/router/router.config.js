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
                meta: { title: '仪表盘', icon: 'dashboard', permission: ['dashboard'] },
                children: [
                    {
                        path: '/schedule',
                        name: 'schedule',
                        component: () => import(/* webpackChunkName: "WorkPlace" */ '@/views/WorkPlace.vue'),
                        meta: { title: '计划预览', permission: ['dashboard'] }
                    }
                ]
            },
            {
                path: '/html',
                name: 'html',
                component: PageView,
                meta: { title: 'HTML知识合集', icon: 'html5', permission: ['html'] },
                children: [
                    {
                        path: '/tags',
                        name: 'tags',
                        component: () => import(/* webpackChunkName: "HtmlLearn" */ '@/views/HtmlLearn.vue'),
                        meta: { title: 'HTML5标签', permission: ['html'] }
                    }
                ]
            },
            {
                path: '/css',
                name: 'css',
                component: PageView,
                meta: { title: 'CSS重点笔记', icon: 'ant-design', permission: ['css'] },
                children: [
                    {
                        path: '/scss',
                        name: 'scss',
                        component: () => import(/* webpackChunkName: "css" */ '@/views/DesignPattern.vue'),
                        meta: { title: 'CSS预编译', permission: ['css'] }
                    }
                ]
            },
            {
                path: '/js',
                name: 'js',
                component: PageView,
                meta: { title: 'JS知识框架', icon: 'chrome', permission: ['js'] },
                children: [
                    {
                        path: '/datatype',
                        name: 'datatype',
                        component: () => import(/* webpackChunkName: "datatype" */ '@/views/JsLearn/DataType.vue'),
                        meta: { title: '数据类型', permission: ['js'] }
                    }
                ]
            },
            {
                path: '/charts',
                name: 'charts',
                component: PageView,
                meta: { title: '图表应用', icon: 'area-chart', permission: ['charts'] },
                children: [
                    {
                        path: '/map',
                        name: 'map',
                        component: () => import(/* webpackChunkName: "map" */ '@/views/DataMap.vue'),
                        meta: { title: '地图应用', permission: ['charts'] }
                    }
                ]
            },
            {
                path: '/controls',
                name: 'controls',
                component: PageView,
                meta: { title: '权限管理', icon: 'team', permission: ['controls'] },
                children: [
                    {
                        path: '/test',
                        name: 'controlstest',
                        component: () => import(/* webpackChunkName: "controls" */ '@/views/Controls.vue'),
                        meta: { title: '权限测试', permission: ['controls'] }
                    }
                ]
            },
            {
                path: '/personal',
                name: 'personal',
                component: PageView,
                meta: { title: '个人中心', icon: 'user' },
                children: [
                    {
                        path: '/message_manage',
                        name: 'message_manage',
                        component: () => import(/* webpackChunkName: "message" */ '@/views/personal/MessageManage.vue'),
                        meta: { title: '消息管理' }
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
