
import { pushFail } from '@package/push';
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


export function changeOpen(status: boolean): any {
  return function(dispatch: Dispatch): void {
    dispatch(changeOpenAction(status));
  }
}

export function getBucket(): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(getBucketRequestAction());

      const result = await request({
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
        method: 'get',
      });

      dispatch(getBucketSuccessRequestAction(result['data']));
    }
    catch(error) {
      dispatch(getBucketFailRequestAction());
      dispatch<any>(pushFail('Ошибка получения данных по счету'));
    }
  }
}

export function addToBucket(data: any): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(updateBucketRequestAction(null));

      await request({
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
        method: 'post',
        data: {
          ...data,
        },
      });

      const result = await request({
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
        method: 'get',
      });

      dispatch(updateBucketSuccessRequestAction(result['data']));
    }
    catch(error) {
      dispatch(updateBucketFailRequestAction(null));
      dispatch<any>(pushFail('Ошибка при обновлении данных'));
    }
  }
}

export function cleanBucket(): any {
  return async function(dispatch: Dispatch) {
    try {
      dispatch(destroyBucketRequestAction(null));

      const result = await request({
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
        method: 'delete',
      });

      dispatch(destroyBucketSuccessRequestAction(result['data']));
    }
    catch(error) {
      dispatch(destroyBucketFailRequestAction(null));
      dispatch<any>(pushFail('Ошибка при удалении данных'));
    }
  }
}
