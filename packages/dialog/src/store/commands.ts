
import { Dispatch } from 'redux';


import {
  openDialogAction,
  closeDialogAction,
} from './slice';


export function openDialog(name: string, data = null): any {
  return function(dispatch: Dispatch): void {
    dispatch(openDialogAction({ name, data }));
  }
}

export function closeDialog(): any {
  return function(dispatch: Dispatch): void {
    dispatch(closeDialogAction(null));
  }
}
