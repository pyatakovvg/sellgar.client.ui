
import request from '@package/request';

import getConfig from 'next/config';

import {
  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getProductsRequest() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products',
    method: 'get',
  })
}

export function getProducts() {
  return async function(dispatch: any) {
    try {
      dispatch(getProductsRequestAction());

      const result = await getProductsRequest();

      dispatch(getProductsRequestSuccessAction(result));
    }
    catch(error) {
      dispatch(getProductsRequestFailAction());
    }
  }
}