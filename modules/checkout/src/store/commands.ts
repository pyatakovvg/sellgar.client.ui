
import request from '@package/request';

import getConfig from 'next/config';

const config = getConfig();
const process = config['publicRuntimeConfig'];


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
