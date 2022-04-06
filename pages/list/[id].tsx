import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getMoviesList } from '../../utils/request'
import type { GetStaticProps, GetStaticPaths } from 'next'
import MovieCard from '../../components/MovieCard'
import type { Movie } from '../../types/index'

interface ListPageProps {
  listTitle: string
  listID: string
  movies: Movie[]
}

const ListPage: NextPage<ListPageProps> = ({ listTitle, listID, movies }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>{listTitle}</h1>
      <ul className="grid grid-cols-4 gap-8">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const list = (await getMoviesList(id)) || []

  return { props: list }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const lists = []
  const list = (await getMoviesList('1')) || []
  const list2 = (await getMoviesList('2')) || []
  const list3 = (await getMoviesList('3')) || []

  lists.push(list, list2, list3)

  const paths = lists.map((list) => {
    return {
      params: { id: list.listID },
    }
  })

  return {
    // paths: paths, which is the same as
    paths,
    fallback: false,
  }
}

export default ListPage
