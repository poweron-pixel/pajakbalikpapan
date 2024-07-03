import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="all" />

          <meta
            property="og:title"
            content="Lagi Cari Konsultan Pajak dan Punya Permasalahan Pajak Tapi Ngga Tau Harus Tanya Kemana?"
          />
          <meta property="og:url" content="https://pajakbalikpapan.online/" />
          <meta
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            name="robots"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <script async data-api="/_hive" src="/bee.js"></script>
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
