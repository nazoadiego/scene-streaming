import { useState, useEffect, useRef, FC } from 'react'
import { motion } from 'framer-motion'
import MovieCard from './MovieCard'
import Link from 'next/link'

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

type List = {
  listTitle: string
  listID: number
  movies: Movie[]
}

interface MovieListProps {
  listTitle: List['listTitle']
  listID: List['listID']
  movies: List['movies']
}

const MovieList: FC<MovieListProps> = ({ listTitle, movies, listID }) => {
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
      <div className="flex justify-between">
        <h3 className="text-3xl uppercase">{listTitle}</h3>
        <Link href={`/list/${listID}`}>
          <a className="text-xl">See more</a>
        </Link>
      </div>

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
