
import request from '@package/request';

import getConfig from 'next/config';

import {
  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getGroupRequest(params: any) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/groups',
    method: 'get',
    params,
  })
}

export async function getCategoriesRequest(params: any) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/categories',
    method: 'get',
    params,
  })
}

export function getCategories(params: any) {
  return async function(dispatch: any) {
    try {
      dispatch(getCategoriesRequestAction());

      const result = await getCategoriesRequest(params);

      dispatch(getCategoriesRequestSuccessAction(result));
    }
    catch(error) {
      dispatch(getCategoriesRequestFailAction());
    }
  }
}