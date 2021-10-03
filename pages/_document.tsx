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

          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta
            name="twitter:title"
            content="Ganesh Tiwari's Portfolio Website"
          ></meta>
          <meta
            name="twitter:description"
            content="Website listing projects, blogs and content made by Ganesh Tiwari"
          ></meta>
          <meta
            name="twitter:image:src"
            content="https://res.cloudinary.com/dtldj8hpa/image/upload/c_scale,h_720/v1633188973/gats.dev/og-image.webp"
          ></meta>
          <meta name="twitter:site" content="@igat786" />
          <meta name="twitter:creator" content="@igat786" />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
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
