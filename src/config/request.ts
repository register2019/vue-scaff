import {
  addPendingRequest,
  removePendingRequest,
} from "./handleDuplicateRequest";
import axios, { type AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "/api",
};

const request = axios.create(config);

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    removePendingRequest(config);
    addPendingRequest(config);
    return config;
  },
  function (error) {
    console.log(123);

    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    removePendingRequest(response.config);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
