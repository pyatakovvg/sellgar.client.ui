
import React from 'react';
import { Provider } from 'react-redux';

import View from './View';

import store from './store/create';


function Push() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

export default Push;
