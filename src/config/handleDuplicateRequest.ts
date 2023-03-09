import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const pendingRequest = new Map();

export const generateReqKey = (config: AxiosRequestConfig) => {
  const { method, url } = config;
  return [method, url].join("&");
};

export const addPendingRequest = (config: AxiosRequestConfig) => {
  const requestKey = generateReqKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel);
      }
    });
};

export const removePendingRequest = (config: AxiosRequestConfig) => {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey);
    cancelToken(requestKey);
    pendingRequest.delete(requestKey);
  }
};
