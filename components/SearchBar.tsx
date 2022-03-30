import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState, useEffect, useRef } from 'react'
import { IoSearch, IoClose } from 'react-icons/io5'
import { useClickOutside } from 'react-click-outside-hook'

interface SearchBarProps {}

const containerVariants = {
  expanded: {
    height: '20em',
  },
  collapsed: {
    height: '3.8em',
  },
}

const containerTransition = { type: 'spring', damping: 22, stiffness: 150 }

const SearchBar: FC<SearchBarProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [parentRef, isClickedOutside] = useClickOutside()
  const inputRef = useRef()

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
    if (isClickedOutside) collapseContainer()
  }, [isClickedOutside])

  return (
    <motion.div
      className="search-bar-container"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <div className="search-input-container">
        <span className="search-icons">
          <IoSearch />
        </span>
        <input
          type="text"
          className="search-input"
          onFocus={expandContainer}
          placeholder="Search movies"
          ref={inputRef}
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
    </motion.div>
  )
}

export default SearchBar
