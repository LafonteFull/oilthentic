import React from 'react'
import { bgMobile5,
  bubble3BW, bubble4BW } from '../assets/index'

const MileStone2 = () => {
  return (
    <div className="w-screen merry-font h-screen overflow-hidden broken-white-1 z-2">
      <div className="min-w-screen top-0 h-full bg-center bg-cover flex py-5"
        style={{ backgroundImage: `url(${bgMobile5})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col justify-end items-center content-end w-screen">
            {/* Bubble */}
              <div className=" px-10 w-screen flex justify-end">
                <img src={bubble3BW} alt="300.000 shares" className="w-28"/>
              </div>
              <div className="px-10 w-screen flex mb-10">
                <img src={bubble4BW} alt="400.000 shares"  className="w-44"/>
              </div>
            {/* End of bubble */}
            <div className="flex flex-col px-5">
              <h2 className="purple-text text-lg merry-font text-center font-bold">Syarat dan Ketentuan</h2>
              <div className="flex flex-row flex-wrap poppins-font purple-text my-2"
              style={{fontSize: '.5rem'}}>
                <div className="flex flex-col w-2/4 syarat px-2 text-justify">
                  <ul className="list-disc">
                    <li>Anda harus mengirim form yang tersedia terlebih dahulu sebelum dapat share gerakan ini. </li>
                    <li>Jumlah total akan bertambah setiap kali orang share di social media. Satu orang hanya bisa terhitung satu kali dalam jumlah total share. </li>
                  </ul>
                </div>
                <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                  <ul className="list-disc">
                    <li>Anda tidak akan ditarik biaya apapun pada saat pengisian form.  </li>
                    <li>Hadiah bisa didapatkan setiap pembelian PEP Young Living Indonesia di acara Oilthentic Day 2021 tanggal 25 & 26 April 2021. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MileStone2
