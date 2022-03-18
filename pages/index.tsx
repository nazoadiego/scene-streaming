import type { NextPage } from 'next'
import Head from 'next/head'
import MovieList from '../components/MovieList'
import Hero from '../components/Hero'

const Home: NextPage = () => {
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
          <MovieList title="Recommended" />
          <MovieList title="Japanese" />
          <MovieList title="Anime" />
          <MovieList title="Romance" />
        </div>
      </main>
    </div>
  )
}

export default Home
