
import request from '@package/request';

import getConfig from 'next/config';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getGroup(params: any) {
  const result = await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/groups',
    method: 'get',
    params: {
      ...params,
      include: ['categories'],
    },
  });

  return result?.['data']?.[0] || null;
}
