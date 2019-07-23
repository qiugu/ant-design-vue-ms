import axios from 'axios'
import api from '@/api'
import Cookie from 'js-cookie'
import { axios as fetchApi } from '@/utils/request'

const csrf = Cookie.get('csrfToken')

export const login = (param: any) => {
    return fetchApi(api.login, {
        method: 'post',
        headers: {
            'x-csrf-token': csrf
        },
        data: param
    })
}

export const getInfo = () => {
    return fetchApi(api.getInfo, {
        method: 'post',
        headers: {
            'x-csrf-token': csrf
        },
        data: {
            loginName: sessionStorage.getItem('loginName')
        }
    })
}
