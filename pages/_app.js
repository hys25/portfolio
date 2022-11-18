import Head from "next/head"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"
import { MediaProvider } from "../providers/mediaContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <MediaProvider>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/icons/logo-g.svg" />
        <link rel="apple-touch-icon" href="/icons/logo-g.svg"></link>
      </Head>
      <Component {...pageProps} />
    </MediaProvider>
  )
}

export default MyApp
