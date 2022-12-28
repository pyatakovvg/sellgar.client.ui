
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from './create';


interface IState {
  data: IPush[];
}


const REDUCER_NAME = 'package/push';


const slice = createSlice({
  name: REDUCER_NAME,
  initialState: {
    data: [],
  },
  reducers: {
    resetStateAction(state: IState) {
      state.data = [];
    },

    closeNotificationAction(state: IState, { payload }: PayloadAction<string>) {
      const index = state.data.findIndex((item) => item.uuid === payload);

      state.data = [
        ...state.data.slice(0, index),
        ...state.data.slice(index + 1),
      ];
    },

    pushNotificationAction(state: IState, { payload }: PayloadAction<IPush>) {
      state.data = [
        ...state.data,
        payload,
      ]
    },
  },
});

export const {
  resetStateAction,

  pushNotificationAction,
  closeNotificationAction,
} = slice.actions;

export const selectNotifications = (state: TRootState): IPush[] => state[REDUCER_NAME].data;

export const name = slice['name'];
export const reducer = slice['reducer'];
