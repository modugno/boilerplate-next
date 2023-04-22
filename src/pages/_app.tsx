import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/global.css'
import 'styles/styles.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Next.js Boilerplate" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
