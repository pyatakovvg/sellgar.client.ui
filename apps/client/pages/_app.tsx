
import store from '@library/store';

import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import '../styles/global.css'


function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <div id={'dialog'} />
    </Provider>
  );
}

export default App;
