import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import MovieList from '../components/MovieList'
import Hero from '../components/Hero'

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

interface HomeProps {
  movies: Movie[]
  listTitle: string
  listID: number
}

const Home: NextPage<HomeProps> = ({ movies, listTitle }) => {
  console.log(listTitle)
  return (
    <div className="min-h-screen bg-[#101010] py-2 text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-20">
        <div className="flex items-center justify-between">
          <nav className="inline-flex list-none gap-8">
            <li>Home</li>
            <li>NavItem</li>
            <li>NavItem</li>
            <li>NavItem</li>
          </nav>

          <div className="inline-flex gap-4">
            <div>Searchbar</div>
            <div>Profile</div>
          </div>
        </div>
        <div className="flex h-[60vh] items-center">
          <Hero />
        </div>
        <div>
          <MovieList title={listTitle} movies={movies} />
          <MovieList title={listTitle} movies={movies} />
          <MovieList title={listTitle} movies={movies} />
          <MovieList title={listTitle} movies={movies} />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const API_Key = process.env.TMDB_API_KEY
  const res = await fetch(
    `https://api.themoviedb.org/3/list/1?api_key=${API_Key}&language=en-US`
  )
  const data = await res.json()

  return {
    props: {
      movies: data.items,
      listTitle: data.name,
      listID: data.id,
    },
  }
}

export default Home
