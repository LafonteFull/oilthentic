import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import animation from '../assets/upcoming-event.json'
import thankyou from '../assets/Thankyou.png'
import { SwitchCategory, Thankyou_NoLeader } from '../components'

const Thankyou = () => {
  const [showModal, setShowModal] = useState(false)

  // const handleModal = () => {
  //   setShowModal(true)
  // }

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
    <div className="w-full h-full min-h-screen font-sans flex flex-col items-center py-18 bg-gray-300">
      <div className="w-full h-full mt-20 z-0 flex items-center text-white relative overflow-hidden bg-white">
        <img src={thankyou} alt="Thank You" className="w-screen" />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row -mt-32 z-10 justify-center w-full">
        <button
        className="purple-bg justify-center items-center font-bold text-lg text-white px-4 py-3 mx-20 rounded-md border-transparent border border-gray-500"
        style={{minWidth: "320px"}}
        >Become Member</button>
        <button
        className="purple-bg justify-center items-center font-bold text-lg text-white px-4 py-3 mx-20 rounded-md border-transparent border border-gray-500"
        style={{minWidth: "320px"}}
        >Become Member at Event</button>
      </div>

      <h1 className="mt-52 font-bold text-5xl">Join as a Member</h1>
      <SwitchCategory />
      <Thankyou_NoLeader />
      {/* <div id="modal-event">
      { showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl p-5">
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white opacity-95 outline-none focus:outline-none pt-10">
                  <h3 className="text-lg lg:text-2xl md:text-xl font-semibold text-center text-purple-800">
                    2021 Virtual International Grand Convention
                  </h3>
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
      </div> */}
    </div>
  )
}

export default Thankyou
