import { FC } from 'react'
import { motion } from 'framer-motion'

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

interface MovieCardProps {
  movie: Movie
  isGrid?: boolean
}

const MovieCard: FC<MovieCardProps> = ({ movie, isGrid }) => {
  const { poster_path } = movie

  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
    minHeight: isGrid ? '0' : '24rem',
    minWidth: isGrid ? '0' : '18rem',
  }

  return (
    <>
      <motion.div
        className="rounded-xl bg-cover bg-center"
        style={styles}
      ></motion.div>
    </>
  )
}

export default MovieCard
