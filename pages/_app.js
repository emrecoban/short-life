import '@/styles/globals.css'
import { Dongle, Inter } from 'next/font/google'
import Head from 'next/head'

const dongle = Dongle({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-dongle',
})

const inter = Inter({
  weight: ['200', '300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Short Life</title>
        <link rel="icon" type="image/x-icon" href="img/icon.png" />
      </Head>
      <main className={`${dongle.variable} ${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}