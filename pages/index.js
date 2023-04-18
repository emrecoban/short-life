import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from "next/link"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

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
    <header className="flex flex-col mx-auto max-w-6xl p-5 bg-slate-200 mt-14 md:mt-20 lg:mt-24 gap-y-4">
      <motion.div
       initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }}
       className="inline-flex items-center mx-auto">
        <img className="h-12 md:h-12 lg:h-16 self-center mx-1" src="img/icon.png" />
        <h1 className="font-dongle font-bold text-5xl md:text-5xl lg:text-6xl lg:leading-tight text-transparent bg-clip-text bg-gradient-to-r to-[#F66607] from-[#f0bc45] underline underline-offset-3 md:decoration-4 lg:decoration-8 decoration-[#DBF0E0]">Short Life</h1>
      </motion.div>
      <motion.h1 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
      className="font-inter text-4xl md:text-5xl lg:text-6xl text-center font-bold">We know <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#F66607] from-[#f0bc45]">life is short!</span><br />But life hasn't ended yet.</motion.h1>
      <h3>Hey!</h3>
    </header>
  )
}