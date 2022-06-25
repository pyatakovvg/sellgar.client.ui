
import { createSlice, Slice } from '@reduxjs/toolkit';


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

    changeOpenAction(state: IState, { payload }) {
      console.log(123, payload)
      state['isOpen'] = payload;
    },

    getBucketRequest(state: IState) {
      state['inProcess'] = true;
    },
    getBucketFailRequest(state: IState) {
      state['inProcess'] = false;
    },
    getBucketSuccessRequest(state: IState) {
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

export const selectData = (state: any) => state[REDUCER_NAME]['data'];
export const selectIsOpen = (state: any) => state[REDUCER_NAME]['isOpen'];
export const selectInProcess = (state: any) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
