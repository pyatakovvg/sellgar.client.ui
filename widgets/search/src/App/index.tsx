
import React from 'react';
import { Provider } from 'react-redux';

import Widget from './Widget';

import store from './store/create';


function App() {
  return (
    <Provider store={store}>
      <Widget />
    </Provider>
  );
}

export default App;
