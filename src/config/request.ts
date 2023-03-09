import {
  addPendingRequest,
  removePendingRequest,
} from "./handleDuplicateRequest";
import axios, { type AxiosRequestConfig } from "axios";

declare module "axios" {
  interface AxiosRequestConfig {
    // 是否取消重复请求
    isRepeat?: boolean;
  }
}

const config: AxiosRequestConfig = {
  baseURL: "/api",
  isRepeat: false,
};

const request = axios.create(config);

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const { isRepeat } = config;
    if (!isRepeat) {
      removePendingRequest(config);
      addPendingRequest(config);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    const { isRepeat } = response.config;
    if (!isRepeat) {
      removePendingRequest(response.config);
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
