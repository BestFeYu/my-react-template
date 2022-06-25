import axios from "axios";

const service = axios.create({});

service.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
    } else {
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        default:
      }
      return Promise.reject(error.response);
    }
  }
);

export default service;
