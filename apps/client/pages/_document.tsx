
import React from 'react';
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document'


function Document() {
  return (
    <Html>
      <Head>
        <meta name={'Cache-Control'} content={'no-cache, no-store, max-age=0, must-revalidate'}/>
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg"/>
        <Script src="https://kit.fontawesome.com/7bd9075b89.js" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <div id={'dialog'} />
        <div id={'push'} />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
