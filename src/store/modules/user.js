import Vue from 'vue'
import {login} from '@/api'
const user = {
    state: {
        username: sessionStorage.getItem("username"),
        token: sessionStorage.getItem("token")
    },
    mutations: {
        SET_USER: (state, data) => {
            state.username = data.username
        },
        SET_TOKEN: (state, data) => {
            state.token = data.token
        }
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            login(userInfo).then(response => {
                const result = response.result
                Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 1000)
                commit('SET_TOKEN', result.token)
                resolve()
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        },
    }
}
export default user
