
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer, name } from './slice';


const rootReducer = combineReducers({
  [name]: reducer,
});


export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];

export default setupStore();
