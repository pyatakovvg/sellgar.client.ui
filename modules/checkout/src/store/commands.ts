
import request from '@package/request';

import getConfig from 'next/config';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getCheckout(uuid: string): Promise<any> {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts/' + uuid,
    method: 'get',
  });
}
