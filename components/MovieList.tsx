import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { motion } from 'framer-motion'
import MovieCard from './MovieCard'

type Movie = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: string
  media_type: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface MovieListProps {
  title: string
  movies: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  const [width, setWidth] = useState(0)
  const carrousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // carrousel.current.scrollWidth is the total width of available scrolling
    // carrousel.current.offsetWidth is the displayed width of the sum of items in the carrousel
    const currentCarrousel = carrousel.current as HTMLDivElement
    setWidth(currentCarrousel.scrollWidth - currentCarrousel.offsetWidth)
  }, [])

  return (
    <>
      <h3 className="text-3xl uppercase">{title}</h3>
      <motion.div
        ref={carrousel}
        className="carrousel cursor-grab overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carrousel mr-2 flex gap-4"
        >
          {movies.slice(0, 10).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default MovieList
