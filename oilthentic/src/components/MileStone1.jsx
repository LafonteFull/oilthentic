import React from 'react'
import { bgMobile4, shareFB, shareWA, shareTW, 
  bubble1, bubble2 } from '../assets/index'

const MileStone1 = () => {
  return (
    <div className="w-screen merry-font h-screen overflow-hidden z-10"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="min-w-screen top-0 h-full bg-center bg-cover flex justify-center"
        style={{ backgroundImage: `url(${bgMobile4})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col items-center w-screen ">
            <h3 className="purple-text merry-font text-center text-xl font-bold px-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
            {/* MILESTONE NUMBER */}
            <div className="milestone-box w-64 flex justify-center rounded-3xl bg-white mt-10 h-32">
              <div className="text-3xl flex justify-center rounded-3xl purple-bg  -top-8 py-2 px-8 w-44 text-gray-100 font-bold merry-font share-count ">
                <h1>123,000</h1>
              </div>
              <div className="purple-text text-sm py-10 flex flex-col items-center rounded-xl">
                <p>Orang sudah bergabung</p>
                <div className="flex flex-row justify-center px-2 mt-4">
                  <img src={shareFB} alt="Share Facebook" className="h-8"/>
                  <img src={shareWA} alt="Share WhatsApp" className="h-8"/>
                  <img src={shareTW} alt="Share Twitter" className="h-8"/>
                </div>
              </div>
            </div>
            {/* END OF MILESTONE NUMBER */}
              <div className=" px-2 top-96 right-5">
                <img src={bubble1} alt="100.000 shares" className="w-32 right-0"/>
              </div>
              <div className=" bottom-0 left-0 px-2">
                <img src={bubble2} alt="200.000 shares" className="w-32"/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default MileStone1
