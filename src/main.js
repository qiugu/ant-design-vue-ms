import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {Button,Col,Row,Layout,Menu,Icon,Input,Form,Tag} from 'ant-design-vue'
import './permission'
import '@babel/polyfill'
import '@/config'
import VueStorage from 'vue-ls'

Vue.use(VueStorage,{
  namespace: 'ms__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'session', // storage name session, local, memory
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
