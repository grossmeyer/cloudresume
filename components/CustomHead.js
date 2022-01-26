import Head from 'next/head'

export default function Home({ headTitle = 'Default Title', headDescription = 'Default Description', headPage = '' }) {
  const headUrl = `https://resume.glennmeyer.dev${headPage}`
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content={headDescription} />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={headDescription} />
      <meta property="og:url" content={headUrl} />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:description" content={headDescription} />
    </Head>
  )
}