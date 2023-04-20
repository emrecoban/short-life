import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from "next/link"
import React, {useState} from "react"
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"



export async function getStaticProps({ locale }) {
  const languageData = (await import(`../lang/${locale}.js`)).default
  return {
    props: { languageData },
  }
}

export const metaData = {

}

export default function Home({ languageData }) {
  const [selectedId, setSelectedId] = useState(null)

  // Sample data
  const kareler = []
  for(let i=1; i<=231; i++) {
    kareler.push(i);
  }


  // Language Settings
  const { locale, locales, defaultLocale } = useRouter()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.02, // parent div delay time
        staggerChildren: 0.01 // time between squares
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
      <motion.h1  initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.4
          }} className="font-inter text-lg font-light">Your life in weeks</motion.h1>
        <motion.div
         
          variants={container}
          initial="hidden"
          animate="visible"
          className="bg-zinc-100 w-full flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 justify-center lg:p-4 p-3 lg:rounded-lg rounded-md drop-shadow-sm">
          {kareler.map((_item, index)=>{
            return (
              <motion.div key={index} layoutId={index+1} onClick={() => setSelectedId(index+1)} variants={item} className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-md bg-red-200 cursor-pointer hover:bg-red-400 	hover:drop-shadow-lg"></motion.div>
            )
          })}
          
          <AnimatePresence>
          {selectedId && (
            <>
            <div className="top-0 left-0 absolute w-full h-full backdrop-blur-sm bg-white/30 cursor-pointer" onClick={() => setSelectedId(null)}></div>
            <motion.div
            layoutId={selectedId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
             className="p-4 w-5/6 h-auto rounded-md lg:rounded-lg drop-shadow-md bg-red-200 absolute self-center border border-red-300">
              <h1 className="font-inter font-medium text-lg md:text-2xl mb-2">Week {selectedId} of life</h1>

            <div className="flex flex-wrap gap-2 justify-center w-full h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-200">

                <img className="border-2 border-dashed border-slate-100 lg:max-w-1/4 object-cover rounded-md" src="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?w=400" />
                <div className="lg:w-1/4 rounded-md p-3 bg-slate-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
                </div>
                <img className="lg:w-1/4 object-cover rounded-md" src="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" />
                <img className="lg:w-1/4 object-cover rounded-md" src="https://uploads1.bundoo.com/wp-content/uploads/2015/01/What-kind-of-child-do-you-haveTHUMB-800x500.png" />
                <img className="lg:w-1/4 object-cover rounded-md" src="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" />
                <img className="lg:w-1/4 object-cover rounded-md" src="https://uploads1.bundoo.com/wp-content/uploads/2015/01/What-kind-of-child-do-you-haveTHUMB-800x500.png" />
                <img className="lg:max-w-1/4 object-cover rounded-md" src="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?w=400" />
              
                
              </div>
             </motion.div>
            </>
          )}
        </AnimatePresence>

        </motion.div>
        
      </main>
    </>
  )
}