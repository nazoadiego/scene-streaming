import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

const ListPage: NextPage = () => {
  return (
    <Layout>
      <Link href="/">Home</Link>
      <div className="grid grid-cols-8"></div>
    </Layout>
  )
}

export default ListPage
