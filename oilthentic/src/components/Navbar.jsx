// import React, { useState, useEffect } from 'react'
import { Link, 
  // useLocation
 } from 'react-router-dom'
import brandlogo from '../assets/Logo.png'

const Navbar = () => {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const { pathname } = useLocation()

  // useEffect(() => {
  //   if (localStorage.access_token || pathname === '/sign-up' || pathname === '/sign-up/know-leader' || pathname === '/thank-you' || pathname === '/sign-up/otp') setLoggedIn(true)
  //   else setLoggedIn(false)
  // }, [pathname])

  return (
    <nav className="fixed left-0 w-full z-10 purple-bg flex justify-center md:justify-between lg:justify-between shadow-lg items-center p-5" role="navigation"
    style={{top: -1, zIndex: 9}}>
      <Link to="/">
        <img src={brandlogo} alt="Young Living" 
          style={{maxWidth: '180px'}}
          className="lg:ml-10 md:ml-10"/>
      </Link>
      {/* { !loggedIn && <Link
        className="bg-gray-800 text-white px-5 py-1 rounded md:mr-10 lg:mr-10 shadow-lg text-center"
        style={{maxWidth: '150px'}}
        to="/sign-up">Join Now</Link>
      } */}
    </nav>
  )
}

export default Navbar
