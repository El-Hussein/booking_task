import axios from 'axios';
import {sendAlert} from '../state/actions/alertManager';
import store from '../state/store';
import {AlertType} from '../state/types/alertManager';
import {
  decrementAppRequestQueue,
  incrementAppRequestQueue,
} from '../state/actions/appRequestQueue';
import Storage from './Storage';
import {logoutAdmin} from '../state/actions/auth/logout';

export default new (class HttpClient {
  constructor() {
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.setupResponseInterceptors();
  }

  setupResponseInterceptors() {
    axios.interceptors.request.use(req => {
      store.dispatch(incrementAppRequestQueue());
      return req;
    });
    axios.interceptors.response.use(
      res => {
        store.dispatch(decrementAppRequestQueue());
        return res;
      },
      err => {
        if (err.response?.status === 401) {
          store.dispatch(logoutAdmin());
        }
        const responseError = err.response.data.error;
        if (responseError.message) {
          store.dispatch(sendAlert(AlertType.ERROR, responseError.message));
        }
        store.dispatch(decrementAppRequestQueue());
        return Promise.reject(err.response.data);
      },
    );
  }

  getDefaultConfig() {
    return {
      headers: {
        Lang: 'en',
        Authorization: `Bearer ${Storage.retrieveAdminAuthToken()}`,
      },
    };
  }

  parseConfigAgainstDefaults(config: any) {
    const defaultConfig: any = this.getDefaultConfig();
    Object.keys(config).forEach(k => {
      if (k === 'headers') {
        defaultConfig[k] = {...defaultConfig.headers, ...config.headers};
      } else {
        defaultConfig[k] = config[k];
      }
    });
    return defaultConfig;
  }

  request(url: string, method: string, config: any) {
    return axios.request({
      url,
      method,
      ...this.parseConfigAgainstDefaults(config),
    });
  }

  parseArgs(against: string, firstArg: string, secondArg: any) {
    let secondArgument = secondArg;
    if (secondArgument) {
      secondArgument[against] = firstArg;
    } else {
      secondArgument = {};
      secondArgument[against] = firstArg;
    }
    return secondArgument;
  }

  get(url: string, params?: any, config?: any) {
    const configuration = this.parseArgs('params', params, config);
    return this.request(url, 'get', configuration);
  }

  post(url: string, data: any, config?: any) {
    const configuration = this.parseArgs('data', data, config);
    return this.request(url, 'post', configuration);
  }

  put(url: string, data: any, config?: any) {
    const configuration = this.parseArgs('data', data, config);
    return this.request(url, 'put', configuration);
  }

  patch(url: string, data: any, config?: any) {
    const configuration = this.parseArgs('data', data, config);
    return this.request(url, 'patch', configuration);
  }

  delete(url: string, data?: any, config?: any) {
    const configuration = this.parseArgs('params', data, config);
    return this.request(url, 'delete', configuration);
  }
})();
