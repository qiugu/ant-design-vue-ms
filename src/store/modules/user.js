import Vue from 'vue'
import { login, getInfo } from '@/api/api'
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
            login(userInfo).then(res => {
                const result = res.data.resultData
                Vue.ls.set('ACCESS_TOKEN', result.ACCESS_TOKEN, 60 * 1000)
                commit('SET_TOKEN', result.ACCESS_TOKEN)
            }).catch(error => {
                console.log(error)
            })
        },
        //获取用户角色信息
        GetInfo({ commit }) {
            getInfo().then(res => {
                console.log(res)
                if (res.data.status === 200) {
                    sessionStorage.setItem('roles', JSON.stringify(res.data.resultData.roles))
                }
            })
        }
    }
}
export default user
