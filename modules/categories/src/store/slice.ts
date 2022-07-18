
import { createSlice } from '@reduxjs/toolkit';
import type { Draft, PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/categories';


interface IMeta {
  totalRows: number;
}

interface IState {
  data: Array<any>;
  meta: IMeta;
  inProcess: boolean;
}

const initialState: IState = {
  data: [],
  meta: {
    totalRows: 0,
  },
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['data'] = [];
      state['inProcess'] = false;
    },

    getCategoriesRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = true;
    },
    getCategoriesRequestFailAction(state: Draft<typeof initialState>) {
      state['inProcess'] = false;
    },
    getCategoriesRequestSuccessAction(state: Draft<typeof initialState>, { payload }: PayloadAction<any>) {
      state['data'] = payload['data'];
      state['meta'] = payload['meta'];
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getCategoriesRequestAction,
  getCategoriesRequestFailAction,
  getCategoriesRequestSuccessAction,
} = slice['actions'];

export const selectData = (state: any) => state[REDUCER_NAME]['data'];
export const selectMeta = (state: any) => state[REDUCER_NAME]['meta'];
export const selectInProcess = (state: any) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
