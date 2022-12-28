
import store from './create';
import { openDialogAction, closeDialogAction } from './slice';


export function openDialog<S extends string, T>(name: S, data: T) {
  store.dispatch(openDialogAction({ name, data }));
}

export function closeDialog() {
  store.dispatch(closeDialogAction(null));
}
