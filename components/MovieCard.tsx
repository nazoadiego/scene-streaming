import { FC } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Movie } from '../types/index'

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
    <Link href={`/movie/${movie.id}`}>
      <motion.div className="rounded-xl bg-cover bg-center" style={styles}>
        <a></a>
      </motion.div>
    </Link>
  )
}

export default MovieCard
