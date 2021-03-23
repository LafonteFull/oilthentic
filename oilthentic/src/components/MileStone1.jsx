import React from 'react'
import { bgMobile4, shareFB, shareWA, shareTW, 
  bubble1, bubble2 } from '../assets/index'

const MileStone1 = () => {
  return (
    <div className="w-screen relative merry-font h-screen overflow-hidden z-10"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="min-w-screen relative top-0 h-full bg-center bg-cover flex justify-center"
        style={{ backgroundImage: `url(${bgMobile4})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col items-center w-screen ">
            <h3 className="purple-text merry-font text-center text-xl font-bold px-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
            {/* MILESTONE NUMBER */}
            <div className="milestone-box w-64 md:w-96 relative flex justify-center rounded-3xl bg-white mt-10 h-32">
              <div className="text-3xl flex justify-center rounded-3xl purple-bg absolute -top-8 py-2 px-8 w-44 text-gray-100 font-bold merry-font share-count ">
                <h1>123,000</h1>
              </div>
              <div className="purple-text text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
                <p>Orang sudah bergabung</p>
                <div className="flex flex-row justify-center px-2 mt-4 md:mt-1">
                  <img src={shareFB} alt="Share Facebook" className="h-8 md:h-12 cursor-pointer"/>
                  <img src={shareWA} alt="Share WhatsApp" className="h-8 md:h-12 cursor-pointer"/>
                  <img src={shareTW} alt="Share Twitter" className="h-8 md:h-12 cursor-pointer"/>
                </div>
              </div>
            </div>
            {/* END OF MILESTONE NUMBER */}
              <div className="absolute px-2 top-96 right-5">
                <img src={bubble1} alt="100.000 shares" className="w-32 relative right-0"/>
              </div>
              <div className="absolute bottom-0 left-0 px-2">
                <img src={bubble2} alt="200.000 shares" className="w-32"/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default MileStone1
