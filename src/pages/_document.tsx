/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon_16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon_32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
          <meta name="theme-color" content="#ffd836" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* Tap highlighting */}
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="stylesheet" href="https://use.typekit.net/vwf4vfo.css" />

          {/* */}
          <meta name="application-name" content="TemChurras" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="TemChurras" />
          <meta
            name="description"
            content="A plataforma perfeita pro seu churras"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#0a090c" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#0a090c" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon_32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon_16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#E13971"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://temchurras.com" />
          <meta name="twitter:title" content="TemChurras" />
          <meta
            name="twitter:description"
            content="A plataforma perfeita pro seu churras"
          />
          <meta
            name="twitter:image"
            content="https://temchurras.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="TemChurras" />
          <meta
            property="og:description"
            content="A plataforma perfeita pro seu churras"
          />
          <meta property="og:site_name" content="TemChurras" />
          <meta property="og:url" content="https://temchurras.com" />
          <meta
            property="og:image"
            content="https://temchurras.com/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
