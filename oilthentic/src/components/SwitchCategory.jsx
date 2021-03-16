import React from "react";
import { Link, useLocation } from "react-router-dom";

const SwitchCategory = () => {
  const { pathname } = useLocation()
  const backgroundClass1 = pathname === '/thank-you' ? 'purple-bg text-white' : 'bg-gray-200 text-black'
  const backgroundClass2 = pathname === '/thank-you' ? 'bg-gray-200 text-black' : 'purple-bg text-white'
  return (
    <div className="flex justify-center mt-20 bg-gray-200 rounded-lg p-1 z-10">
        <Link className={backgroundClass1 + " rounded-lg  w-40 font-sans text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:text-gray-700"}
        to="/thank-you">No Leader</Link>
        <Link className={backgroundClass2 + " rounded-lg w-40 font-sans text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:text-gray-700"}
        to="/thank-you/know-leader">Know Leader</Link>
    </div>
  )
}

export default SwitchCategory