import axios from 'axios'
export function login (param) {
    return axios('/user/login',{
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: new URLSearchParams(param)
    })
}