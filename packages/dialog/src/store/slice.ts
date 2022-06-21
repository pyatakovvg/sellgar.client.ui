
import { createSlice, Slice } from '@reduxjs/toolkit';


interface IState {
  isOpen: boolean;
  name: string | null;
  data: any;
}


const REDUCER_NAME = 'package/dialog';

const initialState = {
  isOpen: false,
  name: null,
  data: null,
} as IState;


const slice: Slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['isOpen'] = false;
      state['name'] = null;
      state['data'] = null;
    },

    openDialogAction(state, { payload }) {
      state['isOpen'] = true;
      state['name'] = payload['name'];
      state['data'] = payload['data'];
    },

    closeDialogAction(state) {
      state['isOpen'] = false;
      state['name'] = null;
      state['data'] = null;
    },
  },
});

export const {
  resetStateAction,

  openDialogAction,
  closeDialogAction,
} = slice['actions'];

export const selectName = (state: any) => state[REDUCER_NAME]['name'];
export const selectData = (state: any) => state[REDUCER_NAME]['data'];
export const selectIsOpen = (state: any) => state[REDUCER_NAME]['isOpen'];

export const name = slice['name'];
export const reducer = slice['reducer'];
