
import qs from "qs";
import axios, { AxiosRequestConfig,  ParamsSerializerOptions } from "axios";


const defaultOptions = {};


const requestLogger = (config: any) => {
  let requestData = null;
  const { url, method, params = null, data = null } = config;

  if (params) {
    requestData = JSON.stringify(params);
  }

  if (data) {
    requestData = JSON.stringify(config['data']);
  }

  console.log(`[${method.toLocaleUpperCase()}] ---> "${url}" (${requestData})`);

  return config;
};

const responseLogger = (response: any) => {
  let responseData = null;
  const { config: { url, method, responseType }, status, data = null } = response;

  if (responseType === 'json' && data) {
    responseData = JSON.stringify(data);
  }

  console.log(`[${method.toLocaleUpperCase()}] <--- "${url}" [${status}] (${responseData})`);

  return response;
};

const errorLogger = (error: any) => {
  let status = 0;
  let data = null;
  const { config: { url, method, responseType }, response } = error;

  if (response) {
    status = response['status'];
    if ('data' in response) {
      if (responseType === 'stream') {
        data = 'stream';
      }
      else {
        data = JSON.stringify(response.data);
      }
    }
  }

  console.log(`[${method.toLocaleUpperCase()}] <--- "${url}" [${status}] (${data})`);

  // if ('errno' in error) {
  //   if (error['code'] === 'ECONNREFUSED') {
      return Promise.reject(error);
    // }
  // }

  // if (response) {
  //   if (response['status'] === 400) {
  //     return Promise.reject(new BadRequestError(response['data']['error']));
  //   }
  //   else if (response['status'] === 401) {
  //     return Promise.reject(new UnauthorizedError(response['data']['error']));
  //   }
  //   else if (response['status'] === 404) {
  //     return Promise.reject(new NotFoundError(response['data']['error']));
  //   }
  //   else if (response['status'] === 500) {
  //     return Promise.reject(new InternalServerError(response['data']['error']));
  //   }
  //   else if (response['status'] === 503) {
  //     return Promise.reject(new ServiceUnavailableError(response['data']['error']));
  //   }
  //   else {
  //     return Promise.reject(new BaseError(500, response['data']['error']));
  //   }
  // }
};


export default async function(options: object) {
  try {
    options = {
      ...defaultOptions,
      ...options,
    };

    const instance = axios.create({
      timeout: 24000,
      withCredentials: true,
    });

    instance.interceptors.request.use(function (config: AxiosRequestConfig) {
      // @ts-ignore
      config.paramsSerializer = (params:  ParamsSerializerOptions): string => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
      return config;
    });
    instance.interceptors.request.use(requestLogger, errorLogger);
    instance.interceptors.response.use(responseLogger, errorLogger);

    const { data } = await instance(options);

    return data;
  }
  catch(error: any) {

    if (axios.isCancel(error)) {
      return { success: true, data: null };
    }

    throw new Error(error);
  }
}
