
import request from '@package/request';

import getConfig from 'next/config';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getGroups() {
  const result = await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/products/groups',
    method: 'get',
  });

  return result['data'];
}
