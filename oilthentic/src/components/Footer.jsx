import React from 'react'
import brandlogo from '../assets/yl-logo-color.svg'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-400 text-white py-10">
      <div className="container mx-auto px-8 flex justify-between">
        <img src={brandlogo} alt="Young Living"
          style={{width: '190px'}}
          className="ml-5"/>
        <div className="flex md:flex-row lg:flex-row flex-col text-white mr-10">
          <a target='_blank' rel="noreferrer" href='https://www.youngliving.com/en_US/company/contactus' className="m-3 hover:text-gray-600 cursor-pointer">Contact Us</a>
          <a target='_blank' rel="noreferrer" href='https://www.youngliving.com/en_US/company/events' className="m-3 hover:text-gray-600 cursor-pointer">Events</a>
          <a target='_blank' rel="noreferrer" href='https://www.youngliving.com/en_US/company/careers' className="m-3 hover:text-gray-600 cursor-pointer">Careers</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
