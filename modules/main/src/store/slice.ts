
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/main';


const initialState = {
  data: [],
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
  },
});

export const {
  resetStateAction,
} = slice['actions'];

export const selectData = (state: any) => state[REDUCER_NAME]['data'];
export const selectInProcess = (state: any) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
