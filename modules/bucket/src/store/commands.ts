
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

      const checkoutDetails = [];

      if (data['name']) {
        checkoutDetails.push({ name: 'name', value: data['name'] });
      }

      if (data['phone']) {
        checkoutDetails.push({ name: 'phone', value: data['phone'] });
      }

      if (data['email']) {
        checkoutDetails.push({ name: 'email', value: data['email'] });
      }

      const result = await request({
        url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts',
        method: 'post',
        data: {
          details: checkoutDetails,
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
