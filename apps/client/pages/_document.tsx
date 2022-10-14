
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet" />
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
