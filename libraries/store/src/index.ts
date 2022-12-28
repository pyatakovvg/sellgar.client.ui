
import { configureStore } from '@reduxjs/toolkit';
import { name as checkoutModuleReducerName, reducer as checkoutModuleReducer } from '@module/checkout';

import { reducer as formReducer } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';


const store = configureStore({
  reducer: {
    form: formReducer,
    [checkoutModuleReducerName]: checkoutModuleReducer,
  },
}) as any;

export type TAction = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>;

export default store;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
