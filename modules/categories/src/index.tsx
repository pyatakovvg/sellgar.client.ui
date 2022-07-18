
export { default } from './view';

export { name, reducer } from './store/slice';
export { selectData, selectInProcess } from './store/slice';
export { getCategoriesRequestAction, getCategoriesRequestFailAction, getCategoriesRequestSuccessAction } from './store/slice';

export { getGroupRequest, getCategories, getCategoriesRequest } from './store/commands';
