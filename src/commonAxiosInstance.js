import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
  (config) => {
    // modify config here, if needed
    return config;
  },
  (error) => {
    // handle request error here
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // handle response here, if needed
    return response;
  },
  (error) => {
    // handle response error here
    return Promise.reject(error);
  }
);

export default instance;
