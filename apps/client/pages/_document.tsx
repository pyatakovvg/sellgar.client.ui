
import React from 'react';
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document'


function Document() {
  return (
    <Html>
      <Head>
        <meta name="yandex-verification" content="8b18fc3d468352c3" />
        <meta name={'Cache-Control'} content={'no-cache, no-store, max-age=0, must-revalidate'}/>

        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" />

        {process.env.NODE_ENV !== 'development' && (
          <script dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
              ym(91825319, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
          }}></script>
        )}

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
