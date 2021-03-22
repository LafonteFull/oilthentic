import React from 'react'
// import facebook from '../assets/SocialMedia/FB.png'
// import twitter from '../assets/SocialMedia/TW.png'
// import instagram from '../assets/SocialMedia/IG.png'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
// import Milestones from './Milestones'

const HowItWorks = () => {
  return (
    <div id="content1" className="text-gray-900 flex flex-col md:flex-row lg:flex-row w-full h-full justify-center items-center">
      <Fade right duration={1500}>
        <div className="md:p-10 lg:p-20 p-5 w-full md:w-1/2 lg:w-1/2 mb-10">
          <h2 className="text-5xl font-bold">How it works</h2>
          <p className="mt-10 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores itaque temporibus animi, dolorum maiores vero nisi necessitatibus, veritatis facilis eius laudantium voluptas at eligendi laborum fuga dolores saepe quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, est? Laborum unde dignissimos facere, voluptatum repellendus beatae nobis modi. Nemo itaque possimus, quo dignissimos in ipsa impedit. Cumque, exercitationem blanditiis. Lorem</p>
          <div className="mt-10">
            <Link 
            className="text-lg bg-black text-white py-3 px-10 rounded-lg shadow-lg"
            to="/sign-up">Become a Member</Link>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default HowItWorks
