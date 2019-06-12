import Vue from 'vue'
import { login, getInfo } from '@/api/api'
const user = {
    state: {
        username: sessionStorage.getItem('username'),
        token: sessionStorage.getItem('token'),
        roles: [],
        cover: false
    },
    mutations: {
        SET_USER: (state, data) => {
            state.username = data.username
        },
        SET_TOKEN: (state, data) => {
            state.token = data.token
        },
        SET_ROLES: (state, data) => {
            state.roles = data
        },
        SET_COVER: (state, data) => {
            state.cover = data
        }
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(res => {
                    if (res.data.status === 200) {
                        const result = res.data.resultData
                        Vue.ls.set('ACCESS_TOKEN', result.ACCESS_TOKEN, 60 * 60 * 1000)
                        sessionStorage.setItem('loginName', result.username)
                        commit('SET_TOKEN', result.ACCESS_TOKEN)
                        commit('SET_USER', result.username)
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
            })
        },
        //获取用户角色信息
        GetInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    if (res.data.status === 200) {
                        commit('SET_ROLES', res.data.resultData.info.roles)
                        sessionStorage.setItem('roles', JSON.stringify(res.data.resultData.info))
                    }
                    resolve(res)
                })
            })
        },
        Logout({ commit }) {
            return new Promise((resolve, reject) => {
                sessionStorage.clear()
                commit('SET_TOKEN', '')
                commit('SET_USER', '')
                commit('SET_ROLES', [])
                resolve()
            })
        }
    }
}
export default user
