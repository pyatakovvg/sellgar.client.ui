
import request from '@package/request';

import { Dispatch } from "redux";

import {
  createCheckoutRequest,
  createCheckoutFailRequest,
  createCheckoutSuccessRequest,
} from './slice';


export async function getCheckout(props: any) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
    method: 'get',
    headers: props['headers'],
  })
}

export async function getPayment() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/payments',
    method: 'get',
  });
}

export async function getDelivery() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/delivery',
    method: 'get',
  })
}

export function createCheckout(data: any): any {
  return async function(dispatch: Dispatch): Promise<any> {
    try {
      dispatch(createCheckoutRequest());

      const result = await request({
        url: window.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
        method: 'post',
        data,
      });

      dispatch(createCheckoutSuccessRequest(result['data']));
    }
    catch(error) {
      dispatch(createCheckoutFailRequest());
    }
  }
}
