
import request from '@package/request';

import { Dispatch } from "redux";
import getConfig from 'next/config';

import {
  createCheckoutRequest,
  createCheckoutFailRequest,
  createCheckoutSuccessRequest,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


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
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
        method: 'post',
        data: {
          customer: {
            name: data.name,
            phone: data.phone,
            email: data.email,
          },
          paymentCode: data['paymentCode'],
          deliveryCode: data['deliveryCode'],
        },
      });

      dispatch(createCheckoutSuccessRequest(result['data']));

      return result['data'];
    }
    catch(error) {
      dispatch(createCheckoutFailRequest());

      return null;
    }
  }
}
