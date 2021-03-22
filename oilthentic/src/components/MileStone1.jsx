import React from 'react'
import { bgMobile4 } from '../assets/index'

const MileStone1 = () => {
  return (
    <div className="w-screen relative merry-font h-screen overflow-hidden broken-white-1 -top-20 z-10">
      <div className="min-w-screen relative top-0 h-full bg-center bg-cover flex py-5"
        style={{ backgroundImage: `url(${bgMobile4})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col items-center content-center w-screen py-10">
          <h3 className="purple-text merry-font text-center text-2xl font-bold mt-5">Pencapaian Menuju Hadiah Lebih Banyak</h3>
        </div>
      </div>
    </div>
  )
}

export default MileStone1
