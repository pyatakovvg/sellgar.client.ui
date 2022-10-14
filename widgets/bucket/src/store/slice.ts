
import { createSlice, Slice } from '@reduxjs/toolkit';
import type { Draft, PayloadAction } from '@reduxjs/toolkit';


interface IState {
  isOpen: boolean;
  data: any;
  inProcess: boolean;
  inUpdateProcess: boolean;
}


const REDUCER_NAME = 'widget/bucket';

const initialState = {
  isOpen: false,
  data: null,
  inProcess: true,
  inUpdateProcess: false,
} as IState;


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

    changeOpenAction(state: IState, { payload }: PayloadAction<typeof initialState['isOpen']>) {
      state['isOpen'] = payload;
    },

    getBucketRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = true;
    },
    getBucketFailRequestAction(state: Draft<typeof initialState>) {
      state['inProcess'] = false;
    },
    getBucketSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<any>) {
      state['data'] = payload;
      state['inProcess'] = false;
    },

    updateBucketRequestAction(state: Draft<typeof initialState>) {
      state['inUpdateProcess'] = true;
    },
    updateBucketFailRequestAction(state: Draft<typeof initialState>) {
      state['inUpdateProcess'] = false;
    },
    updateBucketSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<any>) {
      state['data'] = payload;
      state['inUpdateProcess'] = false;
    },

    destroyBucketRequestAction(state: Draft<typeof initialState>) {
      state['inUpdateProcess'] = true;
    },
    destroyBucketFailRequestAction(state: Draft<typeof initialState>) {
      state['inUpdateProcess'] = false;
    },
    destroyBucketSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<any>) {
      state['data'] = payload;
      state['inUpdateProcess'] = false;
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
} = slice['actions'] as any;

export const selectData = (state: any): any => state[REDUCER_NAME]['data'];
export const selectIsOpen = (state: any): boolean => state[REDUCER_NAME]['isOpen'];
export const selectInProcess = (state: any): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInUpdateProcess = (state: any): boolean => state[REDUCER_NAME]['inUpdateProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
