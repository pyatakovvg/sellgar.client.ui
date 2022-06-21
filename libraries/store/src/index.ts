
import { configureStore } from '@reduxjs/toolkit';
// import { name as dialogReducerName, reducer as dialogReducer } from '@package/dialog';
// import { name as mainReducerName, reducer as mainReducer } from '@module/main';

import { reducer as formReducer } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    form: formReducer,
    // [dialogReducerName]: dialogReducer,
    // [mainReducerName]: mainReducer,
  },
});

export type TAction = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>;

export default store;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
