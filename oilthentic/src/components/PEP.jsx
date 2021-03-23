import React from 'react'
import { bgMobile8, paketA, paketB } from '../assets/index'
import ReactPlayer from 'react-player'

const PEP = () => {
  return (
    <div id="pep-video" className="w-screen merry-font h-screen overflow-hidden broken-white-1 z-2"
    style={{backgroundColor: '#E8E3DD'}}>
      <div className="min-w-screen h-full bg-center bg-cover flex py-5"
        style={{ backgroundImage: `url(${bgMobile8})`, backgroundSize: 'cover' }} >
          <div className="px-5 h-full flex flex-col justify-center items-center content-center w-screen mt-5">
            <h3 className="purple-text merry-font text-center font-bold mt-10 text-xl">Kenapa Kamu Harus Beli PEP Young Living</h3>
            <div className="px-10 w-full flex items-center my-4">
              <ReactPlayer url='https://www.youtube.com/watch?v=lUy0hLnK70Y&t=2s'
              style={{maxHeight: '200px'}}/>
            </div>
            <h3 className="purple-text merry-font text-center font-semibold">Paket PEP</h3>
            <h3 className="purple-text merry-font text-center font-semibold italic">Premium Exclusive Package</h3>
            <div className="flex flex-col justify-center items-center px-5">
              <img src={paketA} alt="Paket A"/>
              <img src={paketB} alt="Paket B"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PEP
