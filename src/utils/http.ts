import axios from 'axios'
import Cookie from 'js-cookie'

// 创建 axios 实例
const csrf = Cookie.get('csrfToken')
const service = axios.create({
    timeout: 6000, // 请求超时时间
    headers: {'x-csrf-token': csrf}
})
// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做点什么
    return response
}, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default service
