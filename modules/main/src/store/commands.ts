
import request from '@package/request';

import getConfig from 'next/config';

import {
  getProductsRequestAction,
  getProductsRequestFailAction,
  getProductsRequestSuccessAction,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getProductsRequest(params: any) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products',
    method: 'get',
    params,
  })
}

export async function getGroupsRequest() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/groups',
    method: 'get',
    params: {
      include: ['category'],
      required: ['category'],
    },
  });
}

export function getProducts(params: any) {
  return async function(dispatch: any) {
    try {
      dispatch(getProductsRequestAction());

      const result = await getProductsRequest(params);

      dispatch(getProductsRequestSuccessAction(result));
    }
    catch(error) {
      dispatch(getProductsRequestFailAction());
    }
  }
}