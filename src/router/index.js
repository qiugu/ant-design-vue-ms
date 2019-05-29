import Vue from 'vue'
import Router from 'vue-router'
import { constRouterMap } from './router.config'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouterMap
})