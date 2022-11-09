
import { configureStore } from '@reduxjs/toolkit';
import { name as pushReducerName, reducer as pushReducer } from '@package/push';
import { name as bucketReducerName, reducer as bucketReducer } from '@widget/bucket';
import { name as searchReducerName, reducer as searchReducer } from '@widget/search';
import { name as dialogReducerName, reducer as dialogReducer } from '@package/dialog';
import { name as checkoutModuleReducerName, reducer as checkoutModuleReducer } from '@module/checkout';

import { reducer as formReducer } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';


const store = configureStore({
  reducer: {
    form: formReducer,
    [pushReducerName]: pushReducer,
    [searchReducerName]: searchReducer,
    [bucketReducerName]: bucketReducer,
    [dialogReducerName]: dialogReducer,
    [checkoutModuleReducerName]: checkoutModuleReducer,
  },
}) as any;

export type TAction = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>;

export default store;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
