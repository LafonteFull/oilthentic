import React from 'react'
// import Fade from 'react-reveal/Fade';
import { bgMobile4, webMilestone2, shareFB, shareWA, shareTW, step2, bgWeb7 } from '../assets/index'

const Milestones = (props) => {

  return (
    <div className="w-screen merry-font h-screen flex flex-col"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="px-5 flex flex-col items-center w-screen md:w-1/2 lg:absolute lg:right-40">
        <div className="flex flex-col lg:absolute milestone-placement justify-center items-center">
          <h3 className="purple-text merry-font text-center text-xl font-bold px-10 py-10">Pencapaian Menuju Lebih Banyak Hadiah</h3>
          {/* MILESTONE NUMBER */}
          <div className="milestone-box w-64 md:w-80 flex justify-center flex-col rounded-3xl bg-white mt-10 h-28 relative">
            <div className="absolute purple-bg rounded-full py-2 px-8 text-2xl text-full text-gray-100 relative merry-font
            share-count lg:-top-4 top-2 flex flex-col items-center text-center mx-auto rounded-xl w-3/4 md:w-3/4">
              <h1>123,000</h1>
            </div>
            <div className="purple-text flex flex-col relative text-center text-sm py-10 flex flex-col items-center rounded-xl md:text-base md:font-bold">
              <p className="w-3/4 absolute top-4 md:top-0">Orang sudah bergabung</p>
              <div className="flex flex-row justify-center px-2 -mt-1 md:mt-1 lg:absolute sm:absolute sm:-top-0">
                <img src={shareFB} alt="Share Facebook" className="h-8 md:h-12 cursor-pointer"/>
                <img src={shareWA} alt="Share WhatsApp" className="h-8 md:h-12 cursor-pointer"/>
                <img src={shareTW} alt="Share Twitter" className="h-8 md:h-12 cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
        {/* END OF MILESTONE NUMBER */}
      </div>
      <div className="min-w-screen h-full bg-center bg-cover flex lg:flex-row md:flex-row sm:flex-col justify-center"
        style={{ backgroundImage: `url(${bgWeb7})` , backgroundSize: 'cover' }} >
          <img src={step2} className="" style={{ objectFit: 'cover' }}/>
          <div className="flex flex-col relative md:bottom-80 px-5 md:w-1/2 md:self-end" >
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
  )
}

export default Milestones
