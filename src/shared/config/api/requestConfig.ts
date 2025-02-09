export type ApiRequestConfig = import('axios').AxiosRequestConfig;

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { params: Params; config?: ApiRequestConfig };
