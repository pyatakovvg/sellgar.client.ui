
import request from '@package/request';
import { pushFail } from '@package/push';

import getConfig from 'next/config';

import {
  changeOpenAction,

  getProductsRequestAction,
  getProductsFailRequestAction,
  getProductsSuccessRequestAction,
} from './slice';
import store from './create';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export function changeOpen(status: boolean) {
  store.dispatch(changeOpenAction(status));
}

export async function getProducts(search: string) {
  try {
    store.dispatch(getProductsRequestAction());

    const result = await request({
      url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products',
      method: 'get',
      params: {
        search,
        limit: 8,
      },
    });

    store.dispatch(getProductsSuccessRequestAction(result['data']));
  }
  catch(error) {
    store.dispatch(getProductsFailRequestAction());
    pushFail('Ошибка при получения данных');
  }
}
