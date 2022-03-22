import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { getMoviesList } from '../../utils/request'

const MoviePage: NextPage = () => {
  return (
    <Layout>
      <Link href="/">Go Home</Link>
      <h2>Title</h2>
      <div className="">Details</div>
    </Layout>
  )
}

export default MoviePage
