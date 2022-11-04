
import request from '@package/request';

import getConfig from 'next/config';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getBrands(params: any) {
  const result = await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/brands',
    method: 'get',
    params: {
      ...params,
    },
  });
  return result['data'];
}

export async function getCategory(params: any) {
  const result = await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/categories',
    method: 'get',
    params: {
      ...params,
    },
  });

  return result['data']?.[0] ?? null;
}

export async function getAttributes(params: any) {
  const result = await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/attributes',
    method: 'get',
    params: {
      ...params,
      exclude: ['products'],
    },
  });

  return result['data'];
}

export async function getProducts(params: any) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products',
    method: 'get',
    params,
  })
}
