import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getMoviesList, getMovie } from '../../utils/request'
import type { Movie } from '../../types/index'
import type { GetStaticProps, GetStaticPaths } from 'next'

interface MoviePageProps {
  movie: Movie
}

const MoviePage: NextPage<MoviePageProps> = ({ movie }) => {
  return (
    <Layout>
      <Link href="/">Go Home</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const movie = (await getMovie(id)) || []

  return { props: { movie: movie.movies } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const requestedMovies: [][] = []
  const list1 = (await getMoviesList('1')) || []
  const list2 = (await getMoviesList('2')) || []
  const list3 = (await getMoviesList('3')) || []

  requestedMovies.push(list1.movies, list2.movies, list3.movies)

  const paths = requestedMovies.flat().map((movie) => {
    return {
      params: { id: movie.id.toString() },
    }
  })

  return {
    // paths: paths, which is the same as
    paths,
    fallback: false,
  }
}

export default MoviePage
