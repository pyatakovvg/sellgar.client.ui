
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer, name } from './slice';


const rootReducer = combineReducers({
  [name]: reducer,
});


export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    preloadedState: {},
  });
}

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;

export default setupStore();
