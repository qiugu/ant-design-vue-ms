import axios from 'axios'
import api from '@/api'
import Cookie from 'js-cookie'

const csrf = Cookie.get('csrfToken')
export function login(param) {
    return axios(api.login, {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-csrf-token': csrf
        },
        data: new URLSearchParams(param)
    })
}

export function getInfo() {
    return axios(api.getInfo, {
        method: 'post',
        headers: {
            'x-csrf-token': csrf
        },
        data: {
            loginName: sessionStorage.getItem('loginName')
        }
    })
}