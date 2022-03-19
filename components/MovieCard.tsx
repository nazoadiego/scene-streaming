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
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { poster_path } = movie
  return (
    <>
      <motion.div
        className="item rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
        }}
      ></motion.div>
    </>
  )
}

export default MovieCard
