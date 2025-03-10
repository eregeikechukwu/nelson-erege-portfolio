import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global meta tags, fonts, or links */}
          <meta name="theme-color" content="red" />
        </Head>
        <body>
          <Main /> {/* This is where Next.js will inject the page content */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
