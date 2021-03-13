import React from 'react'
import { Footer, Hero, HowItWorks } from '../components'

const Home = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center">
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Home
