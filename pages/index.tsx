import type { GetStaticProps, NextPage } from 'next'
import MovieList from '../components/MovieList'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { getMoviesList } from '../utils/request'

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
}

interface HomeProps {
  movies: Movie[]
  list: List
}

const Home: NextPage<HomeProps> = ({ movies, list }) => {
  return (
    <Layout>
      <div className="h-[60vh] w-auto">
        <Hero />
      </div>
      <div className="space-y-6">
        <MovieList list={list} movies={movies} />
        <MovieList list={list} movies={movies} />
        <MovieList list={list} movies={movies} />
        <MovieList list={list} movies={movies} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const list = (await getMoviesList()) || []

  return { props: list }
}

export default Home
