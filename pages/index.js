import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from "next/link"
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }){
  const languageData = (await import(`../lang/${locale}.js`)).default
  return {
    props: {languageData},
  }
}

export const metaData = {
  
}

export default function Home({ languageData }) {
  // Language Settings
  const { locale, locales, defaultLocale } = useRouter()

  return (
    <header>
      <div className="inline-flex items-center max-w-xlbg-slate-400">
        <img className="h-12 md:h-12 lg:h-16 self-center mx-1" src="img/icon.png" />
        <h1 className="font-dongle font-bold text-5xl md:text-5xl lg:text-6xl lg:leading-tight text-transparent bg-clip-text bg-gradient-to-r to-[#F66607] from-[#FE8687] underline underline-offset-3 md:decoration-4 lg:decoration-8 decoration-[#DBF0E0]">Short Life</h1>
      </div>
    </header>
  )
}