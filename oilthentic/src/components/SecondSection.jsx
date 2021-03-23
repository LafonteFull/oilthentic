import React from 'react'
import { bgMobile2, buttonInformasi, product1, product2, product3 } from '../assets/index'

const SecondSection = () => {
  return (
    <div className="w-screen relative merry-font h-screen overflow-hidden broken-white-1 z-2">
      <div className="min-w-screen relative top-0 h-screen bg-center bg-cover flex py-5"
        style={{ backgroundImage: `url(${bgMobile2})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col w-screen">
            <p className="poppins-font px-2 purple-text text-justify text-xs ">Dengan cara share acara ini di social media Anda, maka Anda sudah berkontribusi untuk mendapatkan promo lebih banyak pada saat Oilthentic Day 2021. Ajak teman Anda untuk ikut gerakan ini untuk mendapatkan semua promo yang tersedia!</p>
            <div className="px-10 -mt-5 flex items-center flex-col">
              <img src={product1} alt="Oilthentic Products"/>
              <a href="#pep-video" className="merry-font purple-text underline font-bold cursor-pointer text-base">Lihat Informasi Tentang PEP</a>
              <img src={buttonInformasi} alt="Informasi Acara" className="w-44 mt-3"/>
            </div>
            <div className="flex flex-col items-center px-2 mt-10">
              <h3 className="purple-text merry-font text-center font-semibold">Promo yang Bisa Kamu Dapatkan di Oilthentic Day 2021</h3>
              <p className="poppins-font purple-text text-justify text-xs mt-3"> Hadiah didapatkan untuk setiap pembelian PEP Young Living Indonesia di tanggal 25 dan 26 April 2021 berdasarkan total jumlah share yang dihasilkan.</p>
              <div className="flex flex-row justify-center items-center px-10 py-2">
                <img src={product2} alt="Product 1" className="ml-10" style={{width: '8em'}}/>
                <img src={product3} alt="Product 2" className="m-3" style={{width: '12em'}}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
