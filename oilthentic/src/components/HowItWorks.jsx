import React from 'react'
// import imageplaceholder from '../assets/graphics.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram-black.png'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Milestones from './Milestones'

const HowItWorks = () => {
  return (
    <div id="content1" className="text-gray-900 flex flex-col md:flex-row lg:flex-row w-full h-full justify-center items-center">
      <Fade left duration={1500}>
        <div className="flex justify-center items-center flex-col py-20 md:w-1/2 w-full md:w-1/2 lg:w-1/2">
          <Milestones />
          <p className="text-lg">Current share: <span className="font-extrabold text-gray-900 text-2xl">200.000</span></p>
          <p className="font-bold text-lg">
            Share to get more benefits!</p>
          <div className="flex justify-around mt-2 items-center">
          <svg className="w-6 h-6 mr-3" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
            <img src={facebook} alt="facebook" className="mr-4 cursor-pointer" style={{width: '30px', height: '30px'}}/>
            <img src={instagram} alt="instagram" className="mr-4 cursor-pointer" style={{width: '30px', height: '30px'}}/>
            <img src={twitter} alt="twitter" className="mr-4 cursor-pointer" style={{width: '30px', height: '30px'}}/>
          </div>
        </div>
      </Fade>
      <Fade right duration={1500}>
        <div className="md:p-10 lg:p-20 p-5 w-full md:w-1/2 lg:w-1/2 mb-10">
          <h2 className="text-5xl font-bold">How it works</h2>
          <p className="mt-10 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores itaque temporibus animi, dolorum maiores vero nisi necessitatibus, veritatis facilis eius laudantium voluptas at eligendi laborum fuga dolores saepe quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, est? Laborum unde dignissimos facere, voluptatum repellendus beatae nobis modi. Nemo itaque possimus, quo dignissimos in ipsa impedit. Cumque, exercitationem blanditiis. Lorem</p>
          <div className="mt-10">
            <Link 
            className="text-lg bg-black text-white py-3 px-10 rounded-lg shadow"
            to="/sign-up">Become a Member</Link>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default HowItWorks
