
import { createSlice, Slice } from '@reduxjs/toolkit';
import type { Draft, PayloadAction } from '@reduxjs/toolkit';


interface IState {
  isOpen: boolean;
  data: any;
  inProcess: boolean;
  inDeleteProcess: boolean;
  inUpdateProcess: Array<string>;
}


const REDUCER_NAME = 'widget/bucket';

const initialState = {
  isOpen: false,
  data: null,
  inProcess: false,
  inUpdateProcess: [],
  inDeleteProcess: false,
} as IState;


const slice: Slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['isOpen'] = false;
      state['data'] = null;
      state['inProcess'] = true;
      state['inUpdateProcess'] = [];
      state['inDeleteProcess'] = false;
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

    updateBucketRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<string>) {
      state['inUpdateProcess'] = [...state['inUpdateProcess'], payload];
    },
    updateBucketFailRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<string>) {
      state['inUpdateProcess'] = state['inUpdateProcess'].filter((uuid: string) => uuid !== payload);
    },
    updateBucketSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<any>) {
      state['data'] = payload['data'];
      state['inUpdateProcess'] = state['inUpdateProcess'].filter((uuid: string) => uuid !== payload['productUuid']);
    },

    destroyBucketRequestAction(state: Draft<typeof initialState>) {
      state['inDeleteProcess'] = true;
    },
    destroyBucketFailRequestAction(state: Draft<typeof initialState>) {
      state['inDeleteProcess'] = false;
    },
    destroyBucketSuccessRequestAction(state: Draft<typeof initialState>, { payload }: PayloadAction<any>) {
      state['data'] = payload;
      state['inDeleteProcess'] = false;
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
} = slice['actions'] as {
  [key: string]: any;
};

export const selectData = (state: any): any => state[REDUCER_NAME]['data'];
export const selectIsOpen = (state: any): boolean => state[REDUCER_NAME]['isOpen'];
export const selectInProcess = (state: any): boolean => state[REDUCER_NAME]['inProcess'];
export const selectInDeleteProcess = (state: any): boolean => state[REDUCER_NAME]['inDeleteProcess'];
export const selectInUpdateProcess = (state: any): Array<string> => state[REDUCER_NAME]['inUpdateProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
