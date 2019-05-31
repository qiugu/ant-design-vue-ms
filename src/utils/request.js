import axios from 'axios'
import VueAxios from './axios'
import notification from 'ant-design-vue/es/notification'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASEURL,
  timeout: 100000
})

const err = error => {
  if (error.response) {
    const data = error.response.data
    const token = sessionStorage.getItem('token')
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })
      if (token) {
        // store.dispatch('Logout').then(() => {
        //   setTimeout(() => {
        //     window.location.reload()
        //   }, 1500)
        // })
      }
    }
  }
  return Promise.reject(error)
}

service.interceptors.request.use(config => {
  config.data = new URLSearchParams(config.data)
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers['sessId'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

service.interceptors.response.use(response => {
  return response.data
}, err)

const installer = {
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
	service as axios
}
