import axios from 'axios';

export default new (class HttpClient {
  constructor() {
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.setupResponseInterceptors();
  }

  setupResponseInterceptors() {
    // axios.interceptors.response.use(
    //   response => {},
    //   err => {},
    // );
  }

  getDefaultConfig() {
    return {
      headers: {
        Lang: 'en',
        // we can add authorization here
        // Authorization: `Bearer ${user_token}`,
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
