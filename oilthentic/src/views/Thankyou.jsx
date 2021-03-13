import React from 'react'
import { Link } from 'react-scroll'

const Thankyou = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center p-20 bg-gray-300">
      <h1 className="font-bold text-4xl mb-10 mt-20 ">Thank you</h1>
      <p className="text-gray-900 mb-10 md:px-20 lg:px-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repudiandae amet eligendi alias dicta porro commodi molestias ut voluptatum debitis natus aliquam quibusdam modi animi reiciendis, error, explicabo consequuntur esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur, ipsam delectus sint consequuntur rem non, molestias tenetur fugit ipsa impedit similique. Praesentium, illum? Odit est asperiores ut placeat sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore asperiores animi sapiente iure veniam repellendus doloribus voluptates labore, ut nam molestiae pariatur natus modi ad quia consequatur. Incidunt, odio atque.</p>
      <div className="flex flex-row justify-center">
        <button
        className="bg-black text-white hover:bg-gray-900 py-3 px-10 rounded-lg shadow mx-5">Up Coming Event</button>
        <Link to="/">
          <button
          className="bg-transparent border-2 border-black hover:bg-gray-200 py-3 px-10 rounded-lg shadow mx-5">Back To Homepage</button>
        </Link>
      </div>
    </div>
  )
}

export default Thankyou
