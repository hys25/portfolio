import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"
import { MediaProvider } from "../providers/mediaContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <MediaProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MediaProvider>
  )
}

export default MyApp
