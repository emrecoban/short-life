import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from "next/link"
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }){
  const languageData = (await import(`../lang/${locale}.js`)).default
  return {
    props: {languageData},
  }
}

export default function Home({ languageData }) {
  // Language Settings
  const { locale, locales, defaultLocale } = useRouter()

  return (
    <header>
      
    </header>
  )
}