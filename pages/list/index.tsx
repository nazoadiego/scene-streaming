import type { GetStaticProps, NextPage } from 'next'
import { getMoviesList } from '../../utils/request'
import Layout from '../../components/Layout'
import MovieCard from '../../components/MovieCard'

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

interface ListPageProps {
  listTitle: List['listTitle']
  movies: List['movies']
}

const ListPage: NextPage<ListPageProps> = ({ listTitle, movies }) => {
  return (
    <Layout>
      <div>
        <h2>{listTitle}</h2>
        <ul className="grid grid-cols-6 gap-2">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const list = (await getMoviesList(2)) || []

  return { props: list }
}

export default ListPage
