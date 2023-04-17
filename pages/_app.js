import '@/styles/globals.css'
import { Dongle } from 'next/font/google'

const dongle = Dongle({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-dongle',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${dongle.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}