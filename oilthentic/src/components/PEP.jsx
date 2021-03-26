import React from 'react'
import { bgMobile8, bgWeb5, paketA, paketB } from '../assets/index'
import ReactPlayer from 'react-player'

const PEP = (props) => {
  return (
    <div id="pep-video" className="merry-font bgImage"
    style={{  backgroundColor: '#E8E3DD' , backgroundImage: props.isMobile ? `url(${bgMobile8})` : `url(${bgWeb5})` }}>
      <div className="flex text-white flex-col min-w-screen justify-center h-full items-center py-10 px-5">
          <div className="px-10 flex flex-col justify-center items-center content-center">
            <h3 className="purple-text merry-font text-center font-bold h-full text-base md:text-3xl px-10 mt-10">Kenapa Kamu Harus Beli PEP Young Living</h3>
            <div className="px-10 flex justify-center my-4 ">
              <ReactPlayer url='https://www.youtube.com/watch?v=lUy0hLnK70Y&t=2s' style={{ maxHeight: props.isMobile ? '180px' : '400px', maxWidth: props.isMobile ? '300px' : 'auto' }}/>
            </div>
            <h3 className="purple-text merry-font text-center font-semibold md:text-4xl mt-5">Paket PEP</h3>
            <h3 className="purple-text merry-font text-center font-semibold italic md:text-3xl ">Premium Exclusive Package</h3>
            <div className="flex flex-col xl:flex-row justify-center items-center px-10 mt-2 py-10 w-10/12">
              <img src={paketA} alt="Paket A" className="md:m-3"
              style={{ minWidth: '50vw' }} 
              />
              <img src={paketB} alt="Paket B" className="md:m-3" 
              style={{ minWidth: '50vw' }} 
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default PEP
