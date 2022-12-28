
import Push from '@package/push';
// import DialogProvider from '@package/dialog';

import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/global.css'


interface IProps extends AppProps {
  Component: any;
  pageProps: any;
}


function MyApp({ Component, pageProps }: IProps) {
  return (
    <>
      <Component {...pageProps} />
      <Push />
    </>
  );
}

export default MyApp;
