
import { createSlice, Slice } from '@reduxjs/toolkit';
import type { Draft, PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


interface IState {
  isOpen: boolean;
  data: Array<any>;
  inProcess: boolean;
  inUpdateProcess: boolean;
}


const REDUCER_NAME = 'widget/search';

const initialState = {
  isOpen: false,
  data: [],
  inProcess: true,
  inUpdateProcess: false,
};


const slice: Slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['isOpen'] = false;
      state['data'] = null;
      state['inProcess'] = true;
      state['inUpdateProcess'] = false;
    },

    changeOpenAction(state: IState, { payload }: PayloadAction<boolean>) {
      state['isOpen'] = payload;
    },

    getProductsRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = true;
    },
    getProductsFailRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = false;
    },
    getProductsSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<any>) {
      state['data'] = payload;
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  changeOpenAction,

  getProductsRequestAction,
  getProductsFailRequestAction,
  getProductsSuccessRequestAction,
} = slice['actions'] as any;

export const selectData = (state: TRootState): Array<any> => state[REDUCER_NAME]['data'];
export const selectIsOpen = (state: TRootState): boolean => state[REDUCER_NAME]['isOpen'];
export const selectInProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUpdateProcess = (state: TRootState): boolean => state[REDUCER_NAME]['inUpdateProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
