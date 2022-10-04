import { MediaProvider } from "../providers/mediaContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <MediaProvider>
      <Component {...pageProps} />
    </MediaProvider>
  )
}

export default MyApp
