
import React from 'react';
import { Provider } from 'react-redux';

import Widget from './Widget';
import BucketProvider from './Provider';

import store from './store/create';


function App() {
  return (
    <Provider store={store}>
      <BucketProvider>
        <Widget />
      </BucketProvider>
    </Provider>
  );
}

export default App;
