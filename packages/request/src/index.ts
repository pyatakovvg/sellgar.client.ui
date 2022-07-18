
import qs from "qs";
import axios from "axios";


const defaultOptions = {};


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

    instance.interceptors.request.use(function (config) {
      config.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
      return config;
    });

    const { data } = await instance(options);

    return data;
  }
  catch(error: any) {
console.log(123, error?.['data'] ?? error['message'])
    if (axios.isCancel(error)) {
      return { success: true, data: null };
    }

    throw new Error('error');
  }
}
