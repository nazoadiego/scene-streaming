import type { GetStaticProps, NextPage } from 'next'
import MovieList from '../components/MovieList'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { getMoviesList } from '../utils/request'
import type { List } from '../types/index'
import SearchBar from '../components/SearchBar'

interface HomeProps {
  lists: List[]
}

const Home: NextPage<HomeProps> = ({ lists }) => {
  return (
    <Layout>
      <SearchBar />
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
  const list = (await getMoviesList('1')) || []
  const list2 = (await getMoviesList('2')) || []
  const list3 = (await getMoviesList('3')) || []

  lists.push(list, list2, list3)

  return { props: { lists: lists } }
}

export default Home
