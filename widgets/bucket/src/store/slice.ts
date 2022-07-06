
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
      state['inProcess'] = false;
    },

    changeOpenAction(state: IState, { payload }: PayloadAction<typeof initialState['isOpen']>) {
      state['isOpen'] = payload;
    },

    getBucketRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = true;
    },
    getBucketFailRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = false;
    },
    getBucketSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<typeof initialState['data']>) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    updateBucketRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = true;
    },
    updateBucketFailRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = false;
    },
    updateBucketSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<typeof initialState['data']>) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    destroyBucketRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = true;
    },
    destroyBucketFailRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = false;
    },
    destroyBucketSuccessRequestAction(state: Draft<typeof initialState>) {
      state['data'] = null;
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  changeOpenAction,

  getBucketRequestAction,
  getBucketFailRequestAction,
  getBucketSuccessRequestAction,

  updateBucketRequestAction,
  updateBucketFailRequestAction,
  updateBucketSuccessRequestAction,

  destroyBucketRequestAction,
  destroyBucketFailRequestAction,
  destroyBucketSuccessRequestAction,
} = slice['actions'];

export const selectData = <T>(state: any): T => state[REDUCER_NAME]['data'];
export const selectIsOpen = <T>(state: any): T => state[REDUCER_NAME]['isOpen'];
export const selectInProcess = <T>(state: any): T => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
