
import request from '@package/request';

import getConfig from 'next/config';

import {
  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,
} from './slice';


const config = getConfig();
const process = config['publicRuntimeConfig'];


export async function getGroupsRequest() {
  return await request({
    url: process.env['GATEWAY_SERVICE_API'] + '/api/v1/groups',
    method: 'get',
  })
}

export function getGroups() {
  return async function(dispatch: any) {
    try {
      dispatch(getGroupsRequestAction());

      const result = await getGroupsRequest();

      dispatch(getGroupsRequestSuccessAction(result));
    }
    catch(error) {
      dispatch(getGroupsRequestFailAction());
    }
  }
}