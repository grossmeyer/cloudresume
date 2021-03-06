import Head from 'next/head'
import '../styles/globals.css'
import '@fontsource/mulish/400.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="GlennMeyer.DEV" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://glennmeyer.dev/avatar.webp" />
        <meta name="twitter:site" content="@grossmeyer" />
        <meta name="twitter:creator" content="@grossmeyer" />
        <meta name="twitter:image" content="https://glennmeyer.dev/avatar.webp" />
        <link rel="canonical" href="https://glennmeyer.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
