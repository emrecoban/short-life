import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from "next/link"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

export async function getStaticProps({ locale }) {
  const languageData = (await import(`../lang/${locale}.js`)).default
  return {
    props: { languageData },
  }
}

export const metaData = {

}

export default function Home({ languageData }) {
  // Language Settings
  const { locale, locales, defaultLocale } = useRouter()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.03
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <header className="flex flex-col mx-auto max-w-6xl p-5 mt-14 md:mt-20 lg:mt-24 gap-y-4">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.8,
            delay: 0.2
          }}
          className="font-inter text-4xl md:text-5xl lg:text-6xl text-center font-bold">We know <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#F66607] from-[#f0bc45]">life is short!</span><br />But life hasn't ended yet.</motion.h1>
        <motion.h3 initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.4
          }} className="font-inter text-lg md:text-xl lg:text-2xl text-center font-extralight mt-5">Capture your life's highlights in squares with Short Life.</motion.h3>
      </header>
      <main className="flex flex-col mx-auto max-w-6xl p-5 gap-y-2">
      <h1 className="font-inter text-lg font-light">Your life in weeks</h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="bg-slate-300 w-full flex flex-wrap gap-1 md:gap-2 lg:gap-3 justify-center lg:p-4 p-3 lg:rounded-lg rounded-md drop-shadow-sm">
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>
          <motion.div variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-orange-200"></motion.div>

        </motion.div>
      </main>
    </>
  )
}