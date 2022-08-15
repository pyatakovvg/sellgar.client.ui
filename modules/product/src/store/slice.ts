
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/product';


const initialState = {
  comments: {
    data: [],
    meta: null,
  },
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['comments'] = {
        data: [],
        meta: null,
      };
      state['inProcess'] = false;
    },

    addOpinionRequest(state: any) {
      state['inProcess'] = true;
    },
    addOpinionRequestFail(state: any) {
      state['inProcess'] = false;
    },
    addOpinionRequestSuccess(state: any, { payload }: any) {
      state['comments'] = {
        data: payload['data'],
        meta: payload['meta'],
      };
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  addOpinionRequest,
  addOpinionRequestFail,
  addOpinionRequestSuccess,
} = slice['actions'];

export const selectComments = (state: any) => state[REDUCER_NAME]['comments'];
export const selectInProcess = (state: any) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
