import axios from 'axios';
import NProgress from 'nprogress';
import qs from 'qs';

function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str)
    .replace(/[!'()]/g, escape)
    .replace(/\*/g, '%2A');
}

const HTTP2 = axios.create({
  headers: {
    Accept: 'application/json'
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  }
});
const loading = NProgress.configure({ showSpinner: false });
HTTP2.interceptors.request.use(
  function (config) {
    loading.start();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

HTTP2.interceptors.response.use(
  res => {
    loading.done();
    return res;
  },
  error => {
    loading.done();
    const response = error.response;
    if (response && response.data && response.data.message) {
      alert(response.data.message);
    } else if (error.message) {
      alert(error.message);
    }
    return Promise.reject(error);
  }
);
export default HTTP2;
