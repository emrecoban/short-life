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
  for(let i=1; i<=66; i++) {
    kareler.push(i);
  }

  const life = {
    years: [
      {
        age: 1,
        posts: ["hello", "how are you?"]
      },
      {
        age: 2,
        posts: ["goodbye", "see you later"]
      },
      {
        age: 3,
        posts: []
      },
      {
        age: 4,
        posts: []
      },
      {
        age: 5,
        posts: ["starting preschool", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends", "making new friends"]
      },
      {
        age: 6,
        posts: ["learning to read", "playing sports"]
      },
      {
        age: 7,
        posts: ["exploring new hobbies", "making art"]
      },
      {
        age: 8,
        posts: ["learning to swim", "going on adventures"]
      },
      {
        age: 9,
        posts: ["making more friends", "building with legos"]
      },
      {
        age: 10,
        posts: ["learning an instrument", "trying new foods"]
      },
      {
        age: 11,
        posts: []
      },
      {
        age: 12,
        posts: []
      },
      {
        age: 13,
        posts: []
      },
      {
        age: 14,
        posts: []
      },
      {
        age: 15,
        posts: []
      },
      {
        age: 16,
        posts: ["starting to work", "saving for the future"]
      },
      {
        age: 17,
        posts: ["planning for college", "applying for scholarships"]
      },
      {
        age: 18,
        posts: ["graduating high school", "starting college"]
      },
      {
        age: 19,
        posts: ["making career choices", "building a network"]
      },
      {
        age: 20,
        posts: ["traveling abroad", "exploring new cultures"]
      },
      {
        age: 21,
        posts: ["celebrating milestones", "trying new things"]
      },
      {
        age: 22,
        posts: []
      },
      {
        age: 23,
        posts: []
      },
      {
        age: 24,
        posts: []
      },
      {
        age: 25,
        posts: ["celebrating quarter-life", "learning to adult"]
      },
      {
        age: 26,
        posts: ["finding inner peace", "embracing change", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community"]
      },
      {
        age: 27,
        posts: ["building a home", "investing in the future"]
      },
      {
        age: 28,
        posts: ["learning to cook", "taking on new challenges"]
      },
      {
        age: 29,
        posts: ["exploring new hobbies", "making new connections"]
      },
      {
        age: 30,
        posts: []
      },
      {
        age: 31,
        posts: []
        },
        {
        age: 32,
        posts: []
        },
        {
        age: 33,
        posts: ["finding inner peace", "embracing change", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community"]
        },
        {
        age: 34,
        posts: ["finding inner peace", "embracing change", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community"]
        },
        {
        age: 35,
        posts: ["balancing work and life", "making time for hobbies"]
        },
        {
        age: 36,
        posts: []
        },
        {
        age: 37,
        posts: []
        },
        {
        age: 38,
        posts: []
        },
        {
        age: 39,
        posts: ["continuing education", "investing in personal growth"]
        },
        {
        age: 40,
        posts: []
        },
        {
        age: 41,
        posts: []
        },
        {
        age: 42,
        posts: ["finding purpose", "growing spiritually", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community"]
        },
        {
        age: 43,
        posts: ["finding balance", "prioritizing self-care", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community"]
        },
        {
        age: 44,
        posts: []
        },
        {
        age: 45,
        posts: []
        },
        {
        age: 46,
        posts: ["traveling to new places", "exploring the world"]
        },
        {
        age: 47,
        posts: []
        },
        {
        age: 48,
        posts: []
        },
        {
        age: 49,
        posts: ["building financial security", "planning for retirement", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community"]
        },
        {
        age: 50,
        posts: ["celebrating golden years", "pursuing passions"]
        },
        {
        age: 51,
        posts: []
        },
        {
        age: 52,
        posts: []
        },
        {
        age: 53,
        posts: []
        },
        {
        age: 54,
        posts: ["finding joy in everyday moments", "making memories with loved ones"]
        },
        {
        age: 55,
        posts: ["enjoying retirement", "traveling the world"]
        },
        {
        age: 56,
        posts: ["spending time with family", "giving back to community","spending time with family", "giving back to community",]
        },
        {
        age: 57,
        posts: ["learning new skills", "embracing change", "giving back to community", "giving back to community", "giving back to community"]
        },
        {
        age: 58,
        posts: ["discovering new hobbies", "cultivating creativity"]
        },
        {
        age: 59,
        posts: ["finding meaning in life", "building a legacy", "giving back to community", "giving back to community", "giving back to community", "giving back to community", "giving back to community"]
        },
        {
        age: 60,
        posts: ["celebrating milestones"]
        },
        {
          age: 61,
          posts: ["finding joy in everyday moments", "making memories with loved ones"]
          },
          {
          age: 62,
          posts: ["enjoying retirement", "traveling the world"]
          },
          {
          age: 63,
          posts: ["spending time with family", "giving back to community"]
          },
          {
          age: 64,
          posts: ["learning new skills", "embracing change"]
          },
          {
          age: 65,
          posts: ["discovering new hobbies", "cultivating creativity"]
          },
          {
          age: 66,
          posts: ["finding meaning in life", "building a legacy"]
          },
    ]}  

    console.log("ÖRNEK HAYAT => ", life.years)


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

  const squareStyle = 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-md lg:rounded-lg drop-shadow-sm border cursor-pointer hover:drop-shadow-lg font-dongle font-semibold text-2xl text-slate-500 flex justify-center items-center';

  function squareColor(postCount){
    if(postCount===0){
      return "border-slate-300 bg-slate-200 hover:bg-slate-400 hover:text-slate-200 hover:cursor-default"
    }else if(postCount>0 && postCount<3){
      return "border-orange-300 bg-orange-200 hover:bg-orange-300"
    }else if(postCount>2 && postCount<5){
      return "border-orange-400 bg-orange-300 hover:bg-orange-400"
    }else if(postCount>4 && postCount<7){
      return "border-orange-500 bg-orange-400 hover:bg-orange-500 text-slate-200"
    }else if(postCount>6 && postCount<9){
      return "border-orange-600 bg-orange-500 hover:bg-orange-600 text-slate-200"
    }else if(postCount>8 && postCount<12){
      return "border-orange-700 bg-orange-600 hover:bg-orange-700 text-slate-200"
    }else if(postCount>11 && postCount<14){
      return "border-orange-800 bg-orange-700 hover:bg-orange-800 text-slate-200"
    }else if(postCount>13 && postCount<17){
      return "border-orange-900 bg-orange-800 hover:bg-orange-900 text-slate-200"
    }
    return "border-slate-300 bg-slate-200 hover:bg-red-400"
  }

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
          }} className="font-inter text-lg font-light">Your life in years</motion.h1>
        <motion.div
         
          variants={container}
          initial="hidden"
          animate="visible"
          className="bg-zinc-100 w-full flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 justify-center lg:p-4 p-3 lg:rounded-lg rounded-md drop-shadow-sm">
          {life.years.map((_item, index)=>{
            return (
              <motion.div key={index} layoutId={_item.age} onClick={() => _item.posts.length!=0 && setSelectedId(_item.age)} variants={item} className="relative inline-block">
                <div className={`${squareStyle} ${squareColor(_item.posts.length)}`}>{_item.age}</div>
                {_item.posts.length!=0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-orange-400 rounded-full"></span>
                )}
              </motion.div>
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
              <h1 className="font-inter font-medium text-lg md:text-2xl mb-2">Year {selectedId} of life</h1>

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