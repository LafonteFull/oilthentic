import React from 'react'
import Fade from 'react-reveal/Fade';
import imageplaceholder from '../assets/Milestone.png'
import facebook from '../assets/SocialMedia/FB.png'
import twitter from '../assets/SocialMedia/TW.png'
import instagram from '../assets/SocialMedia/IG.png'

const Milestones = () => {
  return (
    <div className="w-full p-10 flex justify-center items-center flex-col">
      <Fade top duration={1000}>
        <h2 className="text-4xl font-extrabold mb-5">SHAREDLINK MILESTONE</h2>
        <img src={imageplaceholder} alt="Milestone"
        className="w-full md:w-3/4 lg:w-3/4 mt-10"
        style={{}}/>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl">Current share: <span className="font-extrabold text-gray-900 text-2xl">289.760</span></p>
          <p className="font-bold text-xl">
            Share now to earn rewards!</p>
          <div className="flex justify-around mt-2 items-center">
            <img className="h-10 w-10 mx-5" src={facebook} alt="Facebook logo"/>
            <img className="h-10 w-10 mx-5" src={twitter} alt="twitter logo"/>
            <img className="h-10 w-10 mx-5" src={instagram} alt="instagram logo"/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Milestones
