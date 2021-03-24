import React from 'react'
import { bgMobile8, bgWeb5, paketA, paketB } from '../assets/index'
import ReactPlayer from 'react-player'

const PEP = (props) => {
  return (
    <div id="pep-video" className="merry-font bgImage"
    style={{  backgroundColor: '#E8E3DD' , backgroundImage: props.isMobile ? `url(${bgMobile8})` : `url(${bgWeb5})` }}>
      <div className="flex text-white flex-col w-full items-center py-10">
          <div className="px-10 flex flex-col justify-center items-center content-center">
            <h3 className="purple-text merry-font text-center font-bold mt-10 text-base md:text-3xl px-10">Kenapa Kamu Harus Beli PEP Young Living</h3>
            <div className="px-10 flex justify-center my-4 w-96">
              <ReactPlayer url='https://www.youtube.com/watch?v=lUy0hLnK70Y&t=2s' style={{maxHeight: props.isMobile ? '200px' : '400px' }}/>
            </div>
            <h3 className="purple-text merry-font text-center font-semibold md:text-4xl mt-5">Paket PEP</h3>
            <h3 className="purple-text merry-font text-center font-semibold italic md:text-3xl ">Premium Exclusive Package</h3>
            <div className="flex flex-col md:flex-row justify-center items-center px-10 mt-2 py-2">
              <img src={paketA} alt="Paket A" className="md:m-3" 
              style={{  width: props.isMobile ? '250px' : '500px' }}/>
              <img src={paketB} alt="Paket B" className="md:m-3" 
              style={{  width: props.isMobile ? '250px' : '500px' }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PEP
