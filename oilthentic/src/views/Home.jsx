import React from 'react'
import { Benefits, Footer, Hero, HowItWorks } from '../components'

const Home = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Footer />
    </div>
  )
}

export default Home
