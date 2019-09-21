import axios from 'axios';
import notification from 'ant-design-vue/es/notification';
import Cookies from 'js-cookie';
import { VueConstructor } from 'vue';
import store from '@/store';
import VueAxios from './axios';

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASEURL,
  timeout: 100000,
  withCredentials: true,
});

const err = (error: any) => {
  if (error.response) {
    const { data } = error.response;
    const token = sessionStorage.getItem('ms__ACCESS_TOKEN');
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message,
      });
    }
    if (error.response.status === 401) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed',
      });
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
  }
  return Promise.reject(error);
};

service.interceptors.request.use((config) => {
  config.data = new URLSearchParams(config.data);
  const token: string = Cookies.get('csrfToken');
  if (token) {
    config.headers['x-csrf-token'] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, err);

service.interceptors.response.use(response => response.data, err);

const installer = {
  install(Vue: VueConstructor): void {
    Vue.use(VueAxios, service);
  },
};

export {
  installer as VueAxios,
  service as axios,
};
