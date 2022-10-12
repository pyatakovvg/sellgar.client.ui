
import request from '@package/request';

import getConfig from 'next/config';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getGroups() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/groups',
    method: 'get',
    params: {
      include: ['categories'],
      exclude: ['products'],
    },
  });
}

export async function getProducts(params: any) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products',
    method: 'get',
    params,
  });
}
