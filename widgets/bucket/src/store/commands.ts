
// import request from '@package/request';

import { Dispatch } from 'redux';
// import getConfig from 'next/config';

import {
  changeOpenAction,

  getBucketRequest,
  getBucketFailRequest,
  // getBucketSuccessRequest,
} from './slice';

// const config = getConfig();
// const process = config['publicRuntimeConfig'];


export function changeOpen(status: boolean): any {
  return function(dispatch: Dispatch): void {
    dispatch(changeOpenAction(status));
  }
}

export function getBucket() {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(getBucketRequest(null));

      // const result = await request({
      //   url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
      //   method: 'get',
      // });

      // dispatch(getBucketSuccessRequest(result['data']));
    }
    catch(error) {
      dispatch(getBucketFailRequest(null));
    }
  }
}
