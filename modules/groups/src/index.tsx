
export { default } from './view';

export { name, reducer } from './store/slice';
export { selectData, selectInProcess } from './store/slice';
export { getGroupsRequestAction, getGroupsRequestFailAction, getGroupsRequestSuccessAction } from './store/slice';

export { getGroups, getGroupsRequest } from './store/commands';
