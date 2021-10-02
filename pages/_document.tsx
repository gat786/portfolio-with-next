import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:title" content="Ganesh Tiwari's portfolio" />
          <meta property="og:type" content="text/html" />
          <meta property="og:url" content="https://gats.dev" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
