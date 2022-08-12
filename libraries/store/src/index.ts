
import { configureStore } from '@reduxjs/toolkit';
import { name as bucketReducerName, reducer as bucketReducer } from '@widget/bucket';
import { name as dialogReducerName, reducer as dialogReducer } from '@package/dialog';
import { name as mainModuleReducerName, reducer as mainModuleReducer } from '@module/main';
import { name as groupsModuleReducerName, reducer as groupsModuleReducer } from '@module/groups';
import { name as productModuleReducerName, reducer as productModuleReducer } from '@module/product';
import { name as productsModuleReducerName, reducer as productsModuleReducer } from '@module/products';
import { name as checkoutModuleReducerName, reducer as checkoutModuleReducer } from '@module/checkout';
import { name as categoriesModuleReducerName, reducer as categoriesModuleReducer } from '@module/categories';

import { reducer as formReducer } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';


const store = configureStore({
  reducer: {
    form: formReducer,
    [bucketReducerName]: bucketReducer,
    [dialogReducerName]: dialogReducer,
    [mainModuleReducerName]: mainModuleReducer,
    [groupsModuleReducerName]: groupsModuleReducer,
    [productModuleReducerName]: productModuleReducer,
    [productsModuleReducerName]: productsModuleReducer,
    [checkoutModuleReducerName]: checkoutModuleReducer,
    [categoriesModuleReducerName]: categoriesModuleReducer,
  },
}) as any;

export type TAction = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>;

export default store;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
