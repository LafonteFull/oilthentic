import React from 'react'
import { Benefits, Footer, Hero, HowItWorks, EventInfo, Milestones } from '../components'

const Home = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center">
      <Hero />
      <EventInfo />
      <Milestones />
      <HowItWorks />
      <Benefits />
      <Footer />
    </div>
  )
}

export default Home
