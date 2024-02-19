import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='max-w-screen-2xl mx-auto'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
