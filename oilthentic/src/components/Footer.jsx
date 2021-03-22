import React from 'react'
import brandlogo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="w-full purple-bg text-white py-10">
      <div className="container mx-auto px-8 flex justify-between">
        <img src={brandlogo} alt="Young Living"
          // style={{width: '190px'}}
          className="h-16"/>
        <div className="flex md:flex-row lg:flex-row flex-col text-white mr-10">
          <a target='_blank' rel="noreferrer" href='https://www.youngliving.com/en_US/company/contactus' className="m-3 hover:text-gray-200 cursor-pointer">Contact Us</a>
          <a target='_blank' rel="noreferrer" href='https://www.youngliving.com/en_US/company/events' className="m-3 hover:text-gray-200 cursor-pointer">Events</a>
          <a target='_blank' rel="noreferrer" href='https://www.youngliving.com/en_US/company/careers' className="m-3 hover:text-gray-200 cursor-pointer">Careers</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
