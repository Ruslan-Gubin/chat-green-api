import { baseFetch } from "./baseApi";

export type configApiType = {
  idInstance: number;
  token: string;
  method: string;
};

export const fetchGet = <T>(config: configApiType, body?: any): Promise<T> => {
  return baseFetch(config, body, "GET");
};

export const fetchPost = <T>(config: configApiType, body: any): Promise<T> => {
  return baseFetch(config, body, "POST");
};

export const fetchDelete = <T>(
  config: configApiType,
  body: any,
  params: any
): Promise<T> => {
  return baseFetch(config, body, "DELETE", params);
};


