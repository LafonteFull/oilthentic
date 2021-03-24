import React from 'react'
import { bgMobile8, bgWeb5, paketA, paketB } from '../assets/index'
import ReactPlayer from 'react-player'

const PEP = (props) => {
  return (
    <div id="pep-video" className="merry-font h-screen overflow-hidden"
    style={{backgroundColor: 'rgb(231,211,229)'}}>
      <div className="h-screen bg-center flex justify-center py-10"
        style={{ backgroundImage: props.isMobile ? '' : `url(${bgWeb5})`, backgroundSize: 'cover' }} >
          <div className="px-10 flex flex-col justify-center items-center content-center">
            <h3 className="purple-text merry-font text-center font-bold mt-10 text-base md:text-3xl">Kenapa Kamu Harus Beli PEP Young Living</h3>
            <div className="px-10 flex justify-center my-4 w-96">
              <ReactPlayer url='https://www.youtube.com/watch?v=lUy0hLnK70Y&t=2s' style={{maxHeight: props.isMobile ? '200px' : '400px' }}/>
            </div>
            <h3 className="purple-text merry-font text-center font-semibold md:text-xl ">Paket PEP</h3>
            <h3 className="purple-text merry-font text-center font-semibold italic md:text-lg ">Premium Exclusive Package</h3>
            <div className="flex flex-col md:flex-row justify-center items-center px-10 ">
              <img src={paketA} alt="Paket A" className="w-72 md:w-auto"/>
              <img src={paketB} alt="Paket B" className="w-72 md:w-auto"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PEP
