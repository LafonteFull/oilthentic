import React from 'react'
import imageplaceholder from '../assets/404-error.png'

const Page404 = () => {
  return (
    <main className="flex w-screen h-screen flex-col justify-center items-center p-10">
      <img src={imageplaceholder} alt="404 Page Not Found"
      className="mt-20"/>
      <p className="text-xl mt-10">Sorry, page not found.</p>
    </main>
  )
}

export default Page404
