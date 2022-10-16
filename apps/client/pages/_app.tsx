
import Push from '@package/push';
import store from '@library/store';
import { Provider as BucketProvider } from '@widget/bucket';

import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import '../styles/global.css'


interface IProps extends AppProps {
  Component: any;
  pageProps: any;
}


function MyApp({ Component, pageProps }: IProps) {
  return (
    <Provider store={store}>
      <BucketProvider>
        <Component {...pageProps} />
        <Push />
      </BucketProvider>
    </Provider>
  );
}

export default MyApp;
