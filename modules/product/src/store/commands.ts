
import request from '@package/request';

import getConfig from 'next/config';

import {
  addOpinionRequest,
  addOpinionRequestFail,
  addOpinionRequestSuccess,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getProduct(externalId: string) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/' + externalId,
    method: 'get',
  })
}

export async function getComments(productUuid: string) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/' + productUuid + '/comments',
    method: 'get',
  })
}

export function addComment(data: any) {
  return async function(dispatch: any) {
    try {
      dispatch(addOpinionRequest());

      await request({
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/comments',
        method: 'post',
        data: {
          ...data,
        }
      });

      const result = await getComments(data['productUuid']);

      dispatch(addOpinionRequestSuccess(result));

      return true;
    }
    catch(error) {

      dispatch(addOpinionRequestFail());

      return false;
    }
  }
}