import React from 'react'
import hero from '../assets/heroimage.png'

const Hero = () => {

  return (
    <div className="w-full h-full mt-20 flex items-center text-white relative overflow-hidden bg-white">
      <img src={hero} alt="Young Living"
      className="w-full"/>
    </div>
  )
}

export default Hero
