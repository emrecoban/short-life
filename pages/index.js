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
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  console.log("json'dan gelen veri => ", languageData)

  return (
    <main className="flex flex-col mx-auto max-w-5xl bg-slate-100 rounded-lg text-left space-y-6 p-10">
      <h1 className="text-4xl font-extrabold">{languageData.pageHomeTitle}</h1>
      <p><b>Current locale:</b> {locale}</p>
      <p><b>Default locale:</b> {defaultLocale}</p>
      <p><b>Configured locales:</b> {JSON.stringify(locales)}</p>

      <LocaleSwitcher />
    </main>
  )
}