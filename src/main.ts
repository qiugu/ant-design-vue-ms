// import '@babel/polyfill'
import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import './permission';
// import '@/config'
import { VueAxios } from '@/utils/request';
import VueStorage from 'vue-ls';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.use(VueStorage, {
  namespace: 'ms__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'session', // storage name session, local, memory
});
Vue.config.productionTip = false;
// Vue.prototype.$http = http
Vue.use(VueAxios);
Vue.prototype.$ctx = process.env.VUE_APP_CONTEXT;
Vue.prototype.$base = process.env.VUE_APP_BASEURL;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
