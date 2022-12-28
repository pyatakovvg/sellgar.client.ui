
import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


interface IState {
  isOpen: boolean;
  name: string;
  data: any;
}


const REDUCER_NAME = 'package/dialog';


const slice: Slice<IState> = createSlice({
  name: REDUCER_NAME,
  initialState: {
    name: '',
    data: null,
    isOpen: false,
  },
  reducers: {
    resetStateAction(state: IState) {
      state.name = '';
      state.data = null;
      state.isOpen = false;
    },

    openDialogAction(state: IState, { payload }: PayloadAction<Omit<IState, 'isOpen'>>) {
      state.isOpen = true;
      state.name = payload.name;
      state.data = payload.data;
    },

    closeDialogAction(state: IState) {
      state.name = '';
      state.data = null;
      state.isOpen = false;
    },
  },
});

export const {
  resetStateAction,

  openDialogAction,
  closeDialogAction,
} = slice.actions;

export const selectName = (state: TRootState) => state[REDUCER_NAME].name;
export const selectData = (state: TRootState) => state[REDUCER_NAME].data;
export const selectIsOpen = (state: TRootState) => state[REDUCER_NAME].isOpen;

export const name = slice.name;
export const reducer = slice.reducer;
