import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const FourOFourPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.back()
    }, 3000)
  }, [])

  return (
    <Layout>
      <div className="flex h-[80vh] w-full items-center justify-center">
        <div className="block">
          <h2>Oooops...</h2>
          <h3>Something went wrong!</h3>
          <p>You will be redirected shortly</p>
        </div>
      </div>
    </Layout>
  )
}

export default FourOFourPage
