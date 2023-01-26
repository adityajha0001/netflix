import { Roboto} from '@next/font/google';
import { Alegreya } from '@next/font/google';
import "../styles/globals.css"

// const roboto = Roboto({subsets : ['latin'], weight : ['400','700'],});
const aleg = Alegreya( {subsets : ['greek'] , weight : ['500','400'] })



function MyApp({ Component, pageProps }) {
  return (
    <main className={aleg.className}>
      <Component {...pageProps} />
    </main>
  )
  
}

export default MyApp
