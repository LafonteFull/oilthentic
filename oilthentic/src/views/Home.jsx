import React from 'react'
import { Benefits, Footer, Hero, HowItWorks, EventInfo } from '../components'

const Home = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center">
      <Hero />
      <EventInfo />
      <Benefits />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Home
