import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dtldj8hpa/image/upload/c_scale,h_720/v1633188973/gats.dev/og-image.webp"
          />
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
