
import request from '@package/request';

import { Dispatch } from 'redux';
import getConfig from 'next/config';

import {
  changeOpenAction,

  getBucketRequestAction,
  getBucketFailRequestAction,
  getBucketSuccessRequestAction,

  updateBucketRequestAction,
  updateBucketFailRequestAction,
  updateBucketSuccessRequestAction,

  destroyBucketRequestAction,
  destroyBucketFailRequestAction,
  destroyBucketSuccessRequestAction,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getBucketRequest(headers: any): Promise<any> {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
    method: 'get',
    headers,
  });
}

export function changeOpen(status: boolean): any {
  return function(dispatch: Dispatch): void {
    dispatch(changeOpenAction(status));
  }
}

export function getBucket(): any {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(getBucketRequestAction(null));

      const result = await request({
        url: window.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
        method: 'get',
      });

      dispatch(getBucketSuccessRequestAction(result['data']));
    }
    catch(error) {
      console.log(error)
      dispatch(getBucketFailRequestAction(null));
    }
  }
}

export function addToCart(data: any): any {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(updateBucketRequestAction(null));

      const result = await request({
        url: window.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
        method: 'post',
        data,
      });

      dispatch(updateBucketSuccessRequestAction(result['data']));
    }
    catch(error) {
      dispatch(updateBucketFailRequestAction(null));
    }
  }
}

export function destroyCart(): any {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(destroyBucketRequestAction(null));

      const result = await request({
        url: window.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
        method: 'delete',
      });

      dispatch(destroyBucketSuccessRequestAction(result['data']));
    }
    catch(error) {
      dispatch(destroyBucketFailRequestAction(null));
    }
  }
}
