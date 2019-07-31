import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './permission'
import '@babel/polyfill'
import '@/config'
import { VueAxios } from '@/utils/request'
import VueStorage from 'vue-ls'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(VueStorage, {
  namespace: 'ms__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'session', // storage name session, local, memory
})
Vue.config.productionTip = false
// Vue.prototype.$http = http
Vue.use(VueAxios)
Vue.prototype.$ctx = process.env.VUE_APP_CONTEXT
Vue.prototype.$base = process.env.VUE_APP_BASEURL

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
