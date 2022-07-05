
import { configureStore } from '@reduxjs/toolkit';
import { name as bucketReducerName, reducer as bucketReducer } from '@widget/bucket';
import { name as mainModuleReducerName, reducer as mainModuleReducer } from '@module/main';

import { reducer as formReducer } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';


const store = configureStore({
  reducer: {
    form: formReducer,
    [bucketReducerName]: bucketReducer,
    [mainModuleReducerName]: mainModuleReducer,
  },
}) as any;

export type TAction = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>;

export default store;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
