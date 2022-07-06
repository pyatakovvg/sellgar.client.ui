
import request from '@package/request';

import { Dispatch } from 'redux';

import {
  changeOpenAction,

  getBucketRequestAction,
  getBucketFailRequestAction,
  getBucketSuccessRequestAction,
} from './slice';


export async function getBucketRequest(url: string) {
  return await request({
    url,
    method: 'get',
  });
}

export function changeOpen(status: boolean): any {
  return function(dispatch: Dispatch): void {
    dispatch(changeOpenAction(status));
  }
}

export function getBucket(url: string): any {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(getBucketRequestAction(null));

      const result = await request({
        url,
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

export function addToCart(url: string, data: any): any {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(getBucketRequestAction(null));

      const result = await request({
        url,
        method: 'post',
        data,
      });

      dispatch(getBucketSuccessRequestAction(result['data']));
    }
    catch(error) {
      console.log(error)
      dispatch(getBucketFailRequestAction(null));
    }
  }
}
