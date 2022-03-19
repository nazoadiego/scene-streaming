import { NextPage } from 'next'
import Link from 'next/link'

const ListPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#101010] py-2 text-white">
      <Link href="/">Home</Link>
    </div>
  )
}

export default ListPage
