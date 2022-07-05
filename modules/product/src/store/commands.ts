
import request from '@package/request';

import getConfig from 'next/config';

const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getProduct(externalId: string) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/' + externalId,
    method: 'get',
  })
}

export async function getComments(externalId: string) {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/' + externalId + '/comments',
    method: 'get',
  })
}
