
import { Events } from '@helper/utils';

import qs from "qs";
import axios from "axios";


interface IConfig {
  baseUrl: string;
}


let requestConfig: IConfig = {
  baseUrl: '',
};

const defaultOptions = {};


export const events = new Events();

export function config(config: IConfig) {
  requestConfig = {
    ...requestConfig,
    ...config,
  };
}

export default async function(options: object) {
  try {
    options = {
      ...defaultOptions,
      ...options,
    };

    const instance = axios.create({
      baseURL: requestConfig['baseUrl'],
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
  catch(error) {

    if (axios.isCancel(error)) {
      return { success: true, data: null };
    }

    events.emit('error', error);

    throw new Error('error');
  }
}
