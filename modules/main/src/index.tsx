
export { default } from './view';

export { name, reducer } from './store/slice';
export { selectData, selectInProcess } from './store/slice';
export { getProductsRequestAction, getProductsRequestFailAction, getProductsRequestSuccessAction } from './store/slice';

export { getProducts, getProductsRequest, getGroupsRequest } from './store/commands';
