import Link from 'next/link'
import { NextPage } from 'next/types'

const HomePage: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Link href={'/browse'}>
        <button className="rounded-xl bg-white p-4">
          <h2 className="text-xl font-extralight text-black">Browse</h2>
        </button>
      </Link>
    </div>
  )
}

export default HomePage
