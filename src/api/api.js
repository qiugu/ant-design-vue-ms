import axios from 'axios'
import api from '@/api'

export function login(param) {
    return axios(api.login, {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: new URLSearchParams(param)
    })
}

export function getInfo() {
    return axios(api.getInfo, {
        method: 'post'
    })
}