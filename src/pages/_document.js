import { Html, Head, Main, NextScript } from "next/document";
import { Partytown } from '@builder.io/partytown/react';

export default function Document() {
 

  return (
    <Html lang="en">
      <Head>
        {/* Integrating Partytown for performance optimization */}
        <Partytown debug={true} forward={['dataLayer.push']} />
         </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
