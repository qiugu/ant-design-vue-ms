import BasicLayout from '../components/layouts/BasicLayout.vue';
import UserLayout from '../components/layouts/UserLayout.vue';
import PageView from '../components/layouts/PageView.vue';

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
            component: () => import(/* webpackChunkName: "WorkPlace" */ '../views/dashboard/WorkPlace.vue'),
            meta: { title: '工作台', permission: ['dashboard'] },
          },
        ],
      },
      {
        path: '/articles',
        name: 'articles',
        component: PageView,
        meta: { title: '文章管理', icon: 'html5', permission: ['articles'] },
        children: [
          {
            path: '/arti_edit',
            name: 'arti_edit',
            component: () => import(/* webpackChunkName: "edit" */ '../views/articles/ArticlesEdit.vue'),
            meta: { title: '新增文章', permission: ['articles'] },
          },
          {
            path: '/arti_list',
            name: 'arti_list',
            component: () => import(/* webpackChunkName: "read" */ '../views/articles/ArticlesList.vue'),
            meta: { title: '文章列表', permission: ['articles'] },
          },
        ],
      },
      // {
      //     path: '/css',
      //     name: 'css',
      //     component: PageView,
      //     meta: { title: 'CSS重点笔记', icon: 'ant-design', permission: ['css'] },
      //     children: [
      //         {
      //             path: '/scss',
      //             name: 'scss',
      //             component: () => import(/* webpackChunkName: "css" */ '../views/DesignPattern.vue'),
      //             meta: { title: 'CSS预编译', permission: ['css'] }
      //         }
      //     ]
      // },
      // {
      //     path: '/js',
      //     name: 'js',
      //     component: PageView,
      //     meta: { title: 'JS知识框架', icon: 'chrome', permission: ['js'] },
      //     children: [
      //         {
      //             path: '/datatype',
      //             name: 'datatype',
      //             component: () => import(/* webpackChunkName: "datatype" */ '../views/JsLearn/DataType.vue'),
      //             meta: { title: '数据类型', permission: ['js'] }
      //         }
      //     ]
      // },
      {
        path: '/charts',
        name: 'charts',
        component: PageView,
        meta: { title: '图表应用', icon: 'area-chart', permission: ['charts'] },
        children: [
          {
            path: '/map',
            name: 'map',
            component: () => import(/* webpackChunkName: "map" */ '../views/chart/DataMap.vue'),
            meta: { title: '地图应用', permission: ['charts'] },
          },
          {
            path: '/diagram',
            name: 'diagram',
            component: () => import(/* webpackChunkName: "diagram" */ '../views/chart/Diagram.vue'),
            meta: { title: '图表应用', permission: ['charts'] },
          },
        ],
      },
      {
        path: '/controls',
        name: 'controls',
        component: PageView,
        meta: { title: '权限管理', icon: 'team', permission: ['controls'] },
        children: [
          {
            path: '/test',
            name: 'test',
            component: () => import(/* webpackChunkName: "controls" */ '../views/permissions/Controls.vue'),
            meta: { title: '权限测试', permission: ['controls'] },
          },
        ],
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
            component: () => import(/* webpackChunkName: "message" */ '../views/personal/MessageManage.vue'),
            meta: { title: '消息管理' },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
];

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
        component: () => import(/* webpackChunkName: "login" */ '../views/user/Login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/user/Register.vue'),
      },
      {
        path: '/result',
        name: 'result',
        component: () => import(/* webpackChunkName: "ResultUser" */ '../views/user/ResultUser.vue'),
      },
    ],
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "not_found" */ '../views/notfound/NotFound.vue'),
  },
];
