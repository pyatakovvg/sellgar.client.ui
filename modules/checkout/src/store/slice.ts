
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'module/checkout';


const initialState = {
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,
} = slice['actions'] as any;

export const selectInProcess = (state: any): boolean => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
