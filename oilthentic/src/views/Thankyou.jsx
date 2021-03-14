import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import animation from '../assets/upcoming-event.json'

const Thankyou = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(true)
  }

  const [smallScreen, setSmallScreen] = useState(true)

  useEffect(() => {
    const setLarge = () => {
      if (window.innerWidth < 800) setSmallScreen(false)
      else setSmallScreen(true)
    }
    window.addEventListener('resize', setLarge)

    return () => {
      window.removeEventListener('resize', setLarge)
    }
  }, [smallScreen])

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center p-20 bg-gray-300">
      <h1 className="font-bold text-4xl mb-10 mt-20 ">Thank you</h1>
      <p className="text-gray-900 mb-10 md:px-20 lg:px-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repudiandae amet eligendi alias dicta porro commodi molestias ut voluptatum debitis natus aliquam quibusdam modi animi reiciendis, error, explicabo consequuntur esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur, ipsam delectus sint consequuntur rem non, molestias tenetur fugit ipsa impedit similique. Praesentium, illum? Odit est asperiores ut placeat sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore asperiores animi sapiente iure veniam repellendus doloribus voluptates labore, ut nam molestiae pariatur natus modi ad quia consequatur. Incidunt, odio atque.</p>
      <div className="flex flex-row justify-center">
        <button
        className="bg-black text-white hover:bg-gray-900 py-3 px-10 rounded-lg shadow mx-5"
        onClick={handleModal}>Upcoming Event</button>
        <Link to="/">
          <button
          className="bg-transparent border-2 border-black hover:bg-gray-200 py-3 px-10 rounded-lg shadow mx-5">Back To Homepage</button>
        </Link>
      </div>
      <div id="modal-event">
      { showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl p-5">
              {/*content*/}
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pt-10">
                {/*header*/}
                  <h3 className="text-lg lg:text-2xl md:text-xl font-semibold text-center text-purple-800">
                    2021 Virtual International Grand Convention
                  </h3>
                {/*body*/}
                <div className="relative p-6 flex-auto flex flex-col md:flex-row lg:flex-row">
                  <p className="my-4 text-gray-600 md:text-base lg:text-base text-sm leading-relaxed px-5 w-full md:w-4/6 lg:w-4/6">
                  As Young Living is always looking to raise the standard, our “One” earned a Gold International Business Stevie Award for conventions, and we are excited about the chance to bring the globe together on a massive scale yet again for the 2021 VIGC! The global pandemic continues to challenge us while offering opportunities to expand, improve, and learn. Although restrictions are once again preventing us from gathering in person for our International Grand Convention this year, our vast-reaching global platform will allow us to connect to hundreds of thousands of our global Young Living family members for our second official VIGC taking place June 16–19, 2021.
                  </p>
                  { smallScreen && <div 
                    className="w-full md:w-2/6 lg:w-2/6 p-5 flex justify-center">
                  <Lottie animationData={animation} 
                    loop 
                    autoPlay 
                    style={{maxWidth: '300px'}}/>
                  </div> }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <a href="https://web.cvent.com/event/e2933d75-2e21-4372-a054-0e71831e573d/summary" rel="noreferrer" target="_blank">
                    <button
                      className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Register
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
    </div>
  )
}

export default Thankyou
