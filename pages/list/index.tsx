import type { GetStaticProps, NextPage } from 'next'
import { getMoviesList } from '../../utils/request'
import Layout from '../../components/Layout'
import MovieCard from '../../components/MovieCard'
import { useState } from 'react'
import Pagination from '../../components/Pagination'

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
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  // pagination
  const indexLastPost = currentPage * postsPerPage // page 1 * 12 is 12, page 2 * 12 is 24
  const indexFirstPost = indexLastPost - postsPerPage // 12 - 12 = 0, 24 - 12 = 12
  const currentMovies = movies.slice(indexFirstPost, indexLastPost)

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <Layout>
      <div>
        <h2>{listTitle}</h2>
        <ul
          className="grid grid-cols-[16rem] grid-rows-[24rem_24rem_24rem] gap-2
          sm:grid-cols-2 sm:grid-rows-[26rem_26rem_26rem_26rem_26rem]
          lg:grid-cols-4 lg:grid-rows-[30rem_30rem_]
          2xl:grid-cols-4 2xl:grid-rows-[60rem_60rem]"
        >
          {currentMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} isGrid={true}></MovieCard>
          ))}
        </ul>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={movies.length}
          paginate={paginate}
        />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const list = (await getMoviesList(1)) || []

  return { props: list }
}

export default ListPage
