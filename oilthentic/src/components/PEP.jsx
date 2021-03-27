import React from 'react'
import { bgMobile8, bgWeb5, paketA, paketB } from '../assets/index'
import ReactPlayer from 'react-player'

const PEP = (props) => {
  return (
    <div id="pep-video" className="merry-font bghalf h-full py-10"
    style={{  backgroundColor: '#E8E3DD' , backgroundImage: props.isMobile ? `url(${bgMobile8})` : `url(${bgWeb5})` }}>
      <div className="flex text-white flex-col min-w-full justify-center h-full items-center py-10 px-5">
          <div className="px-10 flex flex-col justify-center items-center flex-end">
            <h3 className="purple-text merry-font text-center font-bold h-full text-base md:text-3xl px-10 md:my-10 lg:text-4xl">Kenapa Kamu Harus Beli PEP Young Living</h3>
            <div className="px-10 flex justify-center my-4 px-20">
              <ReactPlayer url='https://www.youtube.com/watch?v=lUy0hLnK70Y&t=2s' 
              width='60vw'
              height='30vw'
              className="px-20 "
              // style={{ height: props.isMobile? '50%' : '100%' }} 
              />
              {/* <iframe width="40vw" height="auto"
              src="https://www.youtube.com/watch?v=lUy0hLnK70Y">
              </iframe> */}
            </div>
            <h3 className="purple-text merry-font text-center font-semibold md:text-3xl mt-5 lg:text-4xl md:mt-10" >Paket PEP</h3>
            <h3 className="purple-text merry-font text-center font-semibold italic md:text-xl lg:text-2xl xl:text-3xl mt-4">Premium Exclusive Package</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center px-10 mt-2 md:py-10 xl:px-20">
              <img src={paketA} alt="Paket A" className="md:m-3 md:w-3/4 lg:w-2/4"
              // style={{ width: props.isMobile? '80vw' : '45vw' }} 
              />
              <img src={paketB} alt="Paket B" className="md:m-3 md:w-3/4 lg:w-2/4" 
              // style={{ width: props.isMobile? '80vw' : '45vw' }} 
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default PEP
