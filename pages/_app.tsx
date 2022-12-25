import '../styles/globals.css'
import '../components/Cards/Cards.css'
import type { AppProps } from 'next/app'
import MainContext from '../store/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContext>
      <Component {...pageProps} />
    </MainContext>
    
  )
}
