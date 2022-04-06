import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState, useEffect, useRef, MutableRefObject } from 'react'
import { IoSearch, IoClose } from 'react-icons/io5'
import { useClickOutside } from 'react-click-outside-hook'
import { MoonLoader } from 'react-spinners'
import { useRouter } from 'next/router'

// This works pretty well. What we want to do is to put this search bar on the navbar
// When the user starts typing, it should take you to the search page
// this search page has all the movies as static props, and only displays a few.
// Search page has infinite scrolling
// Your search container would be useless, you can change it to animate from right to left
// when the user click on the search icon it opens and animates
// When the user clicks on the close button or the search is empty, redirect to home

interface SearchBarProps {}

const containerVariants = {
  expanded: {
    width: '34em',
  },
  collapsed: {
    width: '3.8em',
  },
}

const containerTransition = { type: 'spring', damping: 22, stiffness: 150 }

const SearchBar: FC<SearchBarProps> = () => {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const [parentRef, isClickedOutside] = useClickOutside()
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const expandContainer = () => {
    setIsExpanded(true)
  }

  const collapseContainer = () => {
    setIsExpanded(false)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  useEffect(() => {
    if (isClickedOutside) {
      collapseContainer()
    }
  }, [isClickedOutside])

  // const handleChange = (e) => {
  //   const searchQuery = e.target.value.toLowerCase()

  //   // setFilteredMovies(
  //   //   movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery))
  //   // )
  // }

  return (
    <motion.div
      className="search-bar-container"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <div className="search-input-container">
        <span className="search-icons" onClick={expandContainer}>
          <IoSearch />
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies"
          ref={inputRef}
          onFocus={() => router.push('/search')}
          // onHandleChange={handleChange}
        />
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="search-icons close-icon"
              onClick={collapseContainer}
            >
              <IoClose />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="line-separator"></div>
    </motion.div>
  )
}

export default SearchBar
