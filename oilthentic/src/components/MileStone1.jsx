import React from 'react'
import { bgMobile4, webMilestone2, shareFB, shareWA, shareTW, 
  bubble1, bubble2 } from '../assets/index'

const MileStone1 = (props) => {
  return (
    <div className="w-screen merry-font h-screen overflow-visible"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="min-w-screen h-full bg-center bg-cover flex justify-center"
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile4})` : `url(${webMilestone2})` , backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col items-center w-screen md:w-1/2 relative">
            <div className="flex flex-col lg:absolute milestone-placement justify-center items-center">
              <h3 className="purple-text merry-font text-center text-xl font-bold px-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
              {/* MILESTONE NUMBER */}
              <div className="milestone-box w-64 md:w-96 flex justify-center flex-col rounded-3xl bg-white mt-10 h-44 sm:h-32">
                <div className="purple-bg rounded-full py-4 px-10 text-3xl text-full text-gray-100 relative merry-font share-count top-2 flex flex-col items-center text-center mx-auto rounded-xl w-3/4">
                  <h1>123,000</h1>
                </div>
                <div className="purple-text flex flex-col text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
                  <p className="w-3/4 relative -top-4">Orang sudah bergabung</p>
                  <div className="flex flex-row justify-center px-2 -mt-1 md:mt-1">
                    <img src={shareFB} alt="Share Facebook" className="h-8 md:h-12 cursor-pointer"/>
                    <img src={shareWA} alt="Share WhatsApp" className="h-8 md:h-12 cursor-pointer"/>
                    <img src={shareTW} alt="Share Twitter" className="h-8 md:h-12 cursor-pointer"/>
                  </div>
                </div>
              </div>
            </div>
            {/* END OF MILESTONE NUMBER */}
            <div className="flex flex-col w-screen gap-48">
              <div className="px-2 self-end mt-32">
                <img src={bubble1} alt="100.000 shares" className="w-32"/>
              </div>
              <div className="px-2 self-start">
                <img src={bubble2} alt="200.000 shares" className="w-32"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MileStone1
