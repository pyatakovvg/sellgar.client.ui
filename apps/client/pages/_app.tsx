
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

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.


// @ts-ignore
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
// console.log(111, appProps)
//   return { ...appProps, a: 1 }
// }

export default MyApp;
