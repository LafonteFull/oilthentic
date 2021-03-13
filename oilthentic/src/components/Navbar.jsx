import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import brandlogo from '../assets/yl-logo-color.svg'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.access_token) setLoggedIn(true)
    else setLoggedIn(false)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white flex justify-between shadow-lg items-center p-5" role="navigation"
    style={{top: 0, zIndex: 9}}>
      <img src={brandlogo} alt="Young Living"
      style={{width: '150px'}}
      className="ml-10"/>
      { !loggedIn && <Link
        className="bg-gray-800 text-white px-5 py-2 rounded-lg mr-10 hover:bg-gray-700"
        to="/sign-up">Sign Up</Link>
      }
    </nav>
  )
}

export default Navbar
