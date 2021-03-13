import React from 'react'
import { Link as ScrollDown } from 'react-scroll'
import hero from '../assets/heroimage.png'
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className="w-full h-full mt-20 flex items-center text-white relative overflow-hidden bg-gray-300">
      <img src={hero} alt="Young Living"/>
      <div className="absolute md:bottom-20 flex py-5 flex-col w-screen h-full items-center justify-end" style={{zIndex: '8'}}>
        <Fade top duration={1500}>
            <ScrollDown to="content1" className="cursor-pointer text-white flex flex-col justify-center items-center">
              <button className="bg-gray-900 text-white md:text-lg px-5 py-2 rounded-lg hover:bg-gray-800 shadow-xl">
                Learn More
              </button>
            </ScrollDown>
          </Fade>
      </div>
    </div>
  )
}

export default Hero
