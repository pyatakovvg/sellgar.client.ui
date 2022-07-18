
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/checkout';


const initialState = {
  data: null,
  delivery: [],
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['data'] = null;
      state['delivery'] = [];
      state['inProcess'] = false;
    },

    getCheckoutRequest() {},
    getCheckoutFailRequest() {},
    getCheckoutSuccessRequest(state, { payload }) {
      state['data'] = payload;
    },

    updateCheckoutRequest(state) {
      state['inProcess'] = true;
    },
    updateCheckoutFailRequest(state) {
      state['inProcess'] = false;
    },
    updateCheckoutSuccessRequest(state, { payload }) {
      state['data'] = payload;
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  getCheckoutSuccessRequest,

  updateCheckoutRequest,
  updateCheckoutFailRequest,
  updateCheckoutSuccessRequest,
} = slice['actions'];

export const selectData = (state: any) => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: any) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
