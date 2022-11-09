
import { pushFail } from '@package/push';
import request from '@package/request';

import { Dispatch } from 'redux';
import getConfig from 'next/config';

import {
  changeOpenAction,

  getProductsRequestAction,
  getProductsFailRequestAction,
  getProductsSuccessRequestAction,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export function changeOpen(status: boolean): any {
  return function(dispatch: Dispatch): void {
    dispatch(changeOpenAction(status));
  }
}

export function getProducts(search: string): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getProductsRequestAction());

      const result = await request({
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products',
        method: 'get',
        params: {
          search,
          limit: 8,
        },
      });

      dispatch(getProductsSuccessRequestAction(result['data']));
    }
    catch(error) {
      dispatch(getProductsFailRequestAction());
      dispatch<any>(pushFail('Ошибка при получения данных'));
    }
  }
}
