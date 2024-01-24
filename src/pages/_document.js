import { Html, Head, Main, NextScript } from 'next/document'

// biasanay ubah bahasa, analitik atau external js,
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
