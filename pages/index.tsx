import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef, MutableRefObject } from 'react'

const Home: NextPage = () => {
  const [width, setWidth] = useState(0)
  const carrousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // carrousel.current.scrollWidth is the total width of available scrolling
    // carrousel.current.offsetWidth is the displayed width of the sum of items in the carrousel
    const currentCarrousel = carrousel.current as HTMLDivElement
    setWidth(currentCarrousel.scrollWidth - currentCarrousel.offsetWidth)
  }, [])

  return (
    <div className="min-h-screen bg-[#101010] py-2 text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-20">
        <div className="flex h-1/6 items-center justify-between">
          <nav className="inline-flex">
            <li>NavItem</li>
            <li>NavItem</li>
            <li>NavItem</li>
            <li>NavItem</li>
          </nav>

          <div className="inline-flex gap-4">
            <div>Searchbar</div>
            <div>Profile</div>
          </div>
        </div>
        <div className="flex h-3/6 items-center">
          <div>
            <h1 className="text-bold text-6xl">
              <span className="text-blue-600">Scene</span> At The Beach
            </h1>
            <p>Description about the movie by Kitano</p>
            <button
              className="mr-2 rounded-full bg-blue-600 px-20 py-2 text-xl
            uppercase shadow-lg shadow-blue-800 transition
            hover:bg-blue-500 hover:shadow-blue-600
            "
            >
              Play
            </button>
            <button className="rounded-full border border-white bg-transparent p-2 px-4">
              +
            </button>
          </div>
        </div>
        <div className="h-2/6">
          <h3 className="text-3xl uppercase">My List</h3>
          <motion.div
            ref={carrousel}
            className="carrousel cursor-grab overflow-hidden bg-blue-500"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carrousel mr-2 flex gap-4 bg-green-300"
            >
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
              <motion.div className="item bg-blue-600"></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Home
