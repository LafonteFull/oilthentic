import React from 'react'
import { bgMobile5, webMilestone4,
  bubble3BW, bubble4BW } from '../assets/index'

const MileStone2 = (props) => {
  return (
    <div className="w-screen merry-font h-screen overflow-hidden min-h-screen"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="min-w-screen h-full bg-center bg-cover flex justify-center "
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile5})` : `url(${webMilestone4})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col justify-end py-20 md:items-start  w-screen">
            {/* Bubble */}
              <div className=" px-2 md:w-1/2 w-full flex relative -top-32 right-6">
                <img src={bubble3BW} alt="300.000 shares" className="w-32 right-0 md:w-48 self-end absolute z-10"/>
              </div>
              <div className=" bottom-0 px-2 md:w-1/2 w-full relative bottom-10">
                <img src={bubble4BW} alt="400.000 shares"  className="w-44 md:w-64"/>
              </div>
            {/* End of bubble */}
            <div className="flex flex-col relative -bottom-10 px-5 md:w-1/2 md:self-end">
              <h2 className="purple-text text-lg merry-font text-center font-bold md:text-3xl">Syarat dan Ketentuan</h2>
              <div className="flex flex-row flex-wrap poppins-font purple-text my-5"
              style={{fontSize: '.5rem'}}>
                <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                  <ul className="list-disc md:text-base m-2">
                    <li>Anda harus mengirim form yang tersedia terlebih dahulu sebelum dapat share gerakan ini. </li>
                    <li>Jumlah total akan bertambah setiap kali orang share di social media. Satu orang hanya bisa terhitung satu kali dalam jumlah total share. </li>
                  </ul>
                </div>
                <div className="flex flex-col w-1/2 syarat px-2 text-justify">
                  <ul className="list-disc md:text-base m-2">
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
