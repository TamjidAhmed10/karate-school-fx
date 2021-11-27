import '../styles/globals.css'
import "../styles/tailwind.css"
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/mason.css"
import "react-pro-sidebar/dist/css/styles.css";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
