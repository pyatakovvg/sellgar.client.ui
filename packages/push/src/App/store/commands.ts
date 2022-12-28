
import { UUID } from '@helper/utils';

import store from './create';
import { pushNotificationAction, closeNotificationAction } from './slice';


export const close = (uuid: string) => {
  store.dispatch(closeNotificationAction(uuid));
};

export const push = (data: IPush) => {
  data.uuid = UUID();
  store.dispatch(pushNotificationAction(data));
};

export const pushFail = (title: string, content?: string) => {
  store.dispatch(pushNotificationAction({
    title,
    content,
    autoClose: false,
    mode: 'danger',
    uuid: UUID(),
  }));
};

export const pushSuccess = (title: string, content?: string) => {
  store.dispatch(pushNotificationAction({
    uuid: UUID(),
    mode: 'success',
    title,
    content,
    autoClose: true,
  }));
};
