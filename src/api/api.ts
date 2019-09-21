import axios from 'axios';
import Cookie from 'js-cookie';
import api from '@/api';
import { axios as fetchApi } from '@/utils/request';

const csrf = Cookie.get('csrfToken');

export const login = (param: any) => fetchApi(api.login, {
  method: 'post',
  headers: {
    'x-csrf-token': csrf,
  },
  data: param,
});

export const getInfo = () => fetchApi(api.getInfo, {
  method: 'post',
  headers: {
    'x-csrf-token': csrf,
  },
  data: {
    loginName: sessionStorage.getItem('loginName'),
  },
});
