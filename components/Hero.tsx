import { FC } from 'react'

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-bold text-6xl">
        <span className="text-blue-600">Scene</span> At The Beach
      </h1>
      <div className="inline-flex gap-2">
        <h5>Director</h5>
        <h5>Release Date</h5>
      </div>
      <p>Description about the movie by Kitano</p>
      <button
        className="mr-2 rounded-full bg-blue-600 px-20 py-2 text-xl
            uppercase shadow-lg shadow-blue-800 transition
            hover:bg-blue-500 hover:shadow-blue-600
            "
      >
        Play
      </button>
      <button className="rounded-full border border-white bg-transparent p-2 px-4 text-xl">
        +
      </button>
    </div>
  )
}

export default Hero
