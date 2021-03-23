import React from 'react'
import { bgMobile8, bgWeb5, paketA, paketB } from '../assets/index'
import ReactPlayer from 'react-player'

const PEP = (props) => {
  return (
    <div id="pep-video" className="w-screen merry-font h-screen overflow-hidden"
    style={{backgroundColor: 'rgb(231,211,229)', minWidth: '100vw'}}>
      <div className="w-screen h-full bg-center bg-cover flex flex-col justify-center"
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile8})` : `url(${bgWeb5})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col justify-center items-center content-center w-screen mt-5">
            <h3 className="purple-text merry-font text-center font-bold mt-10 text-xl md:text-3xl">Kenapa Kamu Harus Beli PEP Young Living</h3>
            <div className="px-10 w-full flex justify-center my-4">
              <ReactPlayer url='https://www.youtube.com/watch?v=lUy0hLnK70Y&t=2s'/>
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
