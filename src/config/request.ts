import axios, { type AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "/api",
};

const request = axios.create(config);

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    console.log(config);

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
