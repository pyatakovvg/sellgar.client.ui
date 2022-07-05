
import { createSlice, Slice } from '@reduxjs/toolkit';
import type { Draft, PayloadAction } from '@reduxjs/toolkit';


interface IState {
  isOpen: boolean;
  data: any;
  inProcess: boolean;
}


const REDUCER_NAME = 'widget/bucket';

const initialState = {
  isOpen: false,
  data: null,
  inProcess: false,
} as IState;


const slice: Slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['isOpen'] = false;
      state['data'] = null;
    },

    changeOpenAction(state: IState, { payload }: PayloadAction<typeof initialState['isOpen']>) {
      state['isOpen'] = payload;
    },

    getBucketRequest(state: Draft<typeof initialState>) {
      state['inProcess'] = true;
    },
    getBucketFailRequest(state: Draft<typeof initialState>) {
      state['inProcess'] = false;
    },
    getBucketSuccessRequest(state: Draft<typeof initialState>, { payload }: PayloadAction<typeof initialState['data']>) {
      state['data'] = payload;
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  changeOpenAction,

  getBucketRequest,
  getBucketFailRequest,
  getBucketSuccessRequest,
} = slice['actions'];

export const selectData = <T>(state: any): T => state[REDUCER_NAME]['data'];
export const selectIsOpen = <T>(state: any): T => state[REDUCER_NAME]['isOpen'];
export const selectInProcess = <T>(state: any): T => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
