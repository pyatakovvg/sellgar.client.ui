
import request from '@package/request';

import { Dispatch } from 'redux';

import {
  changeOpenAction,

  getBucketRequest,
  getBucketFailRequest,
  getBucketSuccessRequest,
} from './slice';


export function changeOpen(status: boolean): any {
  return function(dispatch: Dispatch): void {
    dispatch(changeOpenAction(status));
  }
}

export function getBucket(url: string): any {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(getBucketRequest(null));

      const result = await request({
        url,
        method: 'get',
      });

      dispatch(getBucketSuccessRequest(result['data']));
    }
    catch(error) {
      console.log(error)
      dispatch(getBucketFailRequest(null));
    }
  }
}
