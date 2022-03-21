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
  movies: Movie[]
}

interface HomeProps {
  lists: List[]
}

const Home: NextPage<HomeProps> = ({ lists }) => {
  return (
    <Layout>
      <div className="h-[60vh] w-auto">
        <Hero />
      </div>
      <div className="space-y-6">
        {lists.map((list) => (
          <MovieList
            movies={list.movies}
            listTitle={list.listTitle}
            listID={list.listID}
            key={list.listID}
          />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lists = []
  const list = (await getMoviesList(1)) || []
  const list2 = (await getMoviesList(2)) || []
  const list3 = (await getMoviesList(3)) || []

  lists.push(list, list2, list3)

  return { props: { lists: lists } }
}

export default Home
