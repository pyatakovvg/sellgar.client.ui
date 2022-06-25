
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

    getDeliveryRequest() {},
    getDeliveryFailRequest() {},
    getDeliverySuccessRequest(state, { payload }) {
      state['delivery'] = payload;
    },
  },
});

export const {
  resetStateAction,

} = slice['actions'];

export const selectData = (state: any) => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: any) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
