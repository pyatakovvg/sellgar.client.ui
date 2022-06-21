
import React from 'react';
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document'


function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <Script src="https://kit.fontawesome.com/7bd9075b89.js" crossOrigin="anonymous"></Script>
        <style>@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap);</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
