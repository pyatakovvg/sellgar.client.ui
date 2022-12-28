
import request from '@package/request';
import { pushFail } from '@package/push';

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
import store from './create';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export function changeOpen(status: boolean) {
  store.dispatch(changeOpenAction(status));
}

export async function getBucket() {
  try {
    store.dispatch(getBucketRequestAction());

    const result = await request({
      url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
      method: 'get',
    });

    store.dispatch(getBucketSuccessRequestAction(result['data']));
  }
  catch(error) {
    store.dispatch(getBucketFailRequestAction());
    pushFail('Ошибка получения данных по счету');
  }
}

export async function addToBucket(data: any) {
  try {
    store.dispatch(updateBucketRequestAction(data['productUuid']));

    const result = await request({
      url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
      method: 'post',
      data: {
        ...data,
      },
    });

    store.dispatch(updateBucketSuccessRequestAction({
      data: result['data'],
      productUuid: data['productUuid'],
    }));
  }
  catch(error) {
    store.dispatch(updateBucketFailRequestAction(data['productUuid']));
    pushFail('Ошибка при обновлении данных');
  }
}

export async function cleanBucket(params?: any) {
  try {
    store.dispatch(destroyBucketRequestAction(null));

    const result = await request({
      url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/bucket',
      method: 'delete',
      params: {
        ...params,
      }
    });

    store.dispatch(destroyBucketSuccessRequestAction(result['data']));
  }
  catch(error) {
    store.dispatch(destroyBucketFailRequestAction(null));
    pushFail('Ошибка при удалении данных');
  }
}
