import React, { useState, useEffect } from 'react'
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
      { !loggedIn && <button
        className="bg-purple-800 text-white px-5 py-2 rounded mr-10 hover:bg-purple-700">Sign Up</button>
      }
    </nav>
  )
}

export default Navbar
