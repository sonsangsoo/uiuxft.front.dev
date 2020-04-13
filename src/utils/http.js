import axios from 'axios';
import NProgress from 'nprogress';
import qs from 'qs';
import store from '../store';
import router from '../router';
// import Alert from '../components/alert/Alert';
// import { create } from '../components/modal';

// function fixedEncodeURIComponent(str) {
//   return encodeURIComponent(str)
//     .replace(/[!'()]/g, escape)
//     .replace(/\*/g, '%2A');
// }

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json'
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  }
});

const loading = NProgress.configure({ showSpinner: false });

// const alert = create(Alert, 'title', 'content');

// var source = HTTP.CancelToken.source();
HTTP.interceptors.request.use(
  function (config) {
    // const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo && config.data) {
      // config.headers.Authorization = `Bearer ${token}`;
      const userObj = JSON.parse(userInfo);
      config.data.create_user_idx = userObj.user_id;
      config.data.update_user_idx = userObj.user_id;
    }
    loading.start();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

HTTP.interceptors.response.use(
  res => {
    loading.done();
    // if (res.headers['x-auth-token']) {
    //   localStorage.setItem('token', res.headers['x-auth-token']);
    // }
    return res;
  },
  error => {
    loading.done();
    const response = error.response;
    const isAuthenticated = store.getters.isAuthenticated;
    if (response.status === response && 401) {
      if (isAuthenticated && response.data && response.data.message) {
        alert(response.data.message)
        store.dispatch('logout').then(() => router.push({ name: 'login' }))
      }
    } else if (response && response.data && response.data.message) {
      alert(response.data.message)
    } else if (error.message) {
      alert(error.message)
    }
    return Promise.reject(error);
  }
);

// HTTP.defaults.headers['Authorization'] ='Bearer ' + localStorage.getItem('token');
// HTTP.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default HTTP;
