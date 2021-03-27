import { Link } from 'react-router-dom'
import brandlogo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="fixed w-full purple-gradient flex justify-center shadow-lg p-4 overflow-x-hidden"
    style={{ zIndex: 9999 }}>
      <Link to="/">
        <img src={brandlogo} alt="Young Living Logo" 
          // style={{maxWidth: '200px'}}
          className="w-28 md:w-40"/>
      </Link>
    </nav>
  )
}

export default Navbar
