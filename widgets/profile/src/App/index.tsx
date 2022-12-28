
import React from 'react';
import { Provider } from 'react-redux';

import Widget from './Widget';

import { setupStore } from './store/create';


const store = setupStore();


function Profile() {
  return (
    <Provider store={store}>
      <Widget />
    </Provider>
  );
}

export default Profile;