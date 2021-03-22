import React from 'react'
import { Benefits, Hero, HowItWorks, EventInfo, Milestones } from '../components'
import SignUp from './SignUp'

const Home = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center test ">
      <Hero />
      <EventInfo />
      <Milestones />
      <SignUp />
      <HowItWorks />
      <Benefits />
    </div>
  )
}

export default Home
