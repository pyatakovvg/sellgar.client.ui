
import React from 'react';
import { Provider } from 'react-redux';

import store from './store/create';


interface IProps {
  children: React.ReactNode;
}


function App({ children }: IProps) {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
}

export default App;
