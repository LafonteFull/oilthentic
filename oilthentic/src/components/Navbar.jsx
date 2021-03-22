import { Link } from 'react-router-dom'
import brandlogo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="fixed -top-1 relative w-screen z-999 purple-gradient flex justify-center shadow-lg p-4">
      <Link to="/">
        <img src={brandlogo} alt="Young Living Logo" 
          // style={{maxWidth: '180px'}}
          className="w-28 max-w-3/4"/>
      </Link>
    </nav>
  )
}

export default Navbar
