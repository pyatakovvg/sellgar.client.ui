
import request from '@package/request';

import { Dispatch } from "redux";

import {
  updateCheckoutRequest,
  updateCheckoutFailRequest,
  updateCheckoutSuccessRequest,
} from "./slice";


export async function getCheckout(props: any) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
    method: 'get',
    headers: props['headers'],
  })
}

export async function getDelivery() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/delivery',
    method: 'get',
  })
}

export async function getPayments() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/payments',
    method: 'get',
  })
}

export function updateCart(data: any): any {
  return async function(dispatch: Dispatch): Promise<void> {
    try {
      dispatch(updateCheckoutRequest());

      const result = await request({
        url: window.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
        method: 'post',
        data,
      });

      dispatch(updateCheckoutSuccessRequest(result['data']));
    }
    catch(error) {
      console.log(error)
      dispatch(updateCheckoutFailRequest());
    }
  }
}
