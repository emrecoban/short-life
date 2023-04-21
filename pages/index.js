import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import life from "../lib/sample"



export async function getStaticProps({ locale }) {
  const languageData = (await import(`../lang/${locale}.js`)).default
  return {
    props: { languageData },
  }
}

export const metadata = {

}

export default function Home({ languageData }) {
  const [selectedId, setSelectedId] = useState(null)

  // Language Settings
  const { locale, locales, defaultLocale } = useRouter()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.02, // parent div delay time
        staggerChildren: 0.03 // time between squares
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

  const squareStyle = 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-sm border cursor-pointer hover:drop-shadow-lg font-dongle font-semibold text-2xl flex justify-center items-center';

  function squareColor(postCount) {
    const classList = [
      { class: "border-slate-300 bg-slate-200 hover:bg-slate-400 hover:text-slate-200 hover:cursor-default text-slate-500", min: 0, max: 0 },
      { class: "border-orange-300 bg-orange-200 hover:bg-orange-300 text-slate-500", min: 1, max: 2 },
      { class: "border-orange-400 bg-orange-300 hover:bg-orange-400 text-slate-500", min: 3, max: 4 },
      { class: "border-orange-500 bg-orange-400 hover:bg-orange-500 text-slate-200", min: 5, max: 6 },
      { class: "border-orange-600 bg-orange-500 hover:bg-orange-600 text-slate-200", min: 7, max: 8 },
      { class: "border-orange-700 bg-orange-600 hover:bg-orange-700 text-slate-200", min: 9, max: 11 },
      { class: "border-orange-800 bg-orange-700 hover:bg-orange-800 text-slate-200", min: 12, max: 13 },
      { class: "border-orange-900 bg-orange-800 hover:bg-orange-900 text-slate-100", min: 14, max: 16 },
      { class: "border-orange-950 bg-orange-900 hover:bg-orange-950 text-slate-100", min: 17, max: Infinity }
    ];

    const foundClass = classList.find((item) => postCount >= item.min && postCount <= item.max);

    return foundClass ? foundClass.class : "border-slate-300 bg-slate-200 hover:bg-red-400";
  }

  const badgeDelay = (0.03 * life.years.length) + 0.02 // (staggerChildren*squareCount)+delayChildren


  return (
    <>
      <header className="flex flex-col mx-auto max-w-6xl p-5 mt-14 md:mt-20 lg:mt-24 gap-y-4 relative">
        <motion.div initial={{ rotate: 45, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
            delay: 0.3,
          }} id="milestones" className="absolute -top-24 h-full w-full hidden md:block">
          <div className="animate-pulse absolute top-0 -left-12 h-12 w-12 bg-orange-100 rounded-md border border-orange-200 origin-top-left rotate-12 drop-shadow hover:drop-shadow-lg font-dongle font-semibold text-2xl flex justify-center items-center text-slate-500">7</div>
          <div className="animate-pulse absolute top-16 -left-12 h-12 w-12 bg-orange-200 rounded-md border border-orange-300 origin-top-right -rotate-12 drop-shadow hover:drop-shadow-lg font-dongle font-semibold text-2xl flex justify-center items-center text-slate-500">18</div>
          <div className="animate-pulse absolute top-32 -left-12 h-12 w-12 bg-orange-300 rounded-md border border-orange-400 origin-bottom-right -rotate-6 drop-shadow hover:drop-shadow-lg font-dongle font-semibold text-2xl flex justify-center items-center text-slate-500">27</div>
          <div className="animate-pulse absolute top-48 -left-12 h-12 w-12 bg-orange-400 rounded-md border border-orange-500 origin-bottom-left rotate-12 drop-shadow hover:drop-shadow-lg font-dongle font-semibold text-2xl flex justify-center items-center text-slate-500">40</div>
          <div className="animate-pulse absolute top-64 -left-12 h-12 w-12 bg-orange-500 rounded-md border border-orange-600 origin-top-right -rotate-12 drop-shadow hover:drop-shadow-lg font-dongle font-semibold text-2xl flex justify-center items-center text-slate-200">56</div>
        </motion.div>


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
      <main className="flex flex-col mx-auto max-w-6xl p-5 gap-y-10 mt-4 lg:mt-7">
        <section className="flex flex-col gap-y-2">
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4
            }} className="flex w-full justify-between px-2">
            <h1 className="font-inter text-lg font-light">Your life in years</h1>
            <div className="flex items-center font-inter font-light text-sm">
              <span className="mr-1">Less</span>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-slate-200 border-slate-300 drop-shadow-sm mr-0.5 relative z-0"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-200 border-orange-300 drop-shadow-sm mr-0.5"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-300 border-orange-400 drop-shadow-sm mr-0.5"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-400 border-orange-500 drop-shadow-sm mr-0.5"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-500 border-orange-600 drop-shadow-sm mr-0.5"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-600 border-orange-700 drop-shadow-sm mr-0.5"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-700 border-orange-800 drop-shadow-sm mr-0.5"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-800 border-orange-900 drop-shadow-sm mr-0.5"></div>
              <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-sm lg:rounded border bg-orange-900 border-orange-950 drop-shadow-sm"></div>
              <span className="ml-1">More</span>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="bg-slate-100/20 border border-slate-100 w-full flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 justify-center sm:px-3 sm:py-7 lg:px-4 lg:py-9 px-3 py-6 lg:rounded-lg rounded-md drop-shadow-sm">

            {life.years.map((_item, index) => {
              return (
                <div className="relative inline-block">
                  <motion.div key={index} layoutId={_item.age} onClick={() => _item.posts.length != 0 && setSelectedId(_item.age)} variants={item} className={`${squareStyle} ${squareColor(_item.posts.length)}`}>{_item.age}</motion.div>
                  {_item.posts.length != 0 && (
                    <motion.span initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }} transition={{
                        type: "spring",
                        stiffness: 100,
                        delay: badgeDelay
                      }} className="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-orange-400 rounded-full border md:border-2 border-slate-100"></motion.span>
                  )}
                </div>
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
                    className="p-4 w-5/6 h-auto rounded-md lg:rounded-lg drop-shadow-md bg-slate-200 border-slate-300 absolute self-center border">
                    <h1 className="font-inter font-medium text-lg md:text-2xl mb-2">Year {selectedId} of life</h1>

                    <div className="flex flex-wrap gap-2 justify-center w-full h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-200">

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
        </section>
        <section id="subHeadline" className="flex flex-col mt-16 gap-y-2 relative">
          <div className="bg-gradient-to-b from-transparent to-slate-50 absolute w-full h-full"></div>
          <h1 className="text-center font-inter text-4xl font-bold">ShortLife is a SquareApp.</h1>
          <h1 className="text-center font-inter text-3xl font-bold">SquareShare. SquareLife. SquareSnap.<br />SquareView. SquareShots.<br />SquareArt.</h1>
        </section>
        <section className="flex flex-col mt-8 text-center">
          hey! it's emre!
        </section>
      </main>
    </>
  )
}