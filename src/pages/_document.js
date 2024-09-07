import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Partytown } from '@builder.io/partytown/react';
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  const GTM_ID = 'GTM-PGFRFK3X'; // Update with your GTM ID

  return (
    <Html lang="en">
      <Head>
        {/* Integrating Partytown for performance optimization */}
        {/* <Partytown debug={true} forward={['dataLayer.push']} /> */}
        
        {/* Google Tag Manager component */}
        <GoogleTagManager gtmId={GTM_ID} />

      </Head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
