import React from 'react'
import { bgWeb2, buttonInformasi, product1, product2, product3 } from '../assets/index'
import { ThirdSection } from '../components/index'
 
const SecondSection = (props) => {
  return (
    <>
    <div className="merry-font bghalf"
    style={{ backgroundColor: '#E8E3DC', backgroundImage: `url(${bgWeb2})` }}>
      <div className="px-5 flex flex-col justify-center items-center w-full md:py-20">
            <p className="poppins-font px-2 md:px-40 purple-text text-justify text-xs md:text-3xl md:font-semibold">Dengan cara share acara ini di social media Anda, maka Anda sudah berkontribusi untuk mendapatkan promo lebih banyak pada saat Oilthentic Day 2021. Ajak teman Anda untuk ikut gerakan ini untuk mendapatkan semua promo yang tersedia!</p>
            <div className="px-10 flex items-center flex-col">
              <img src={product1} alt="Oilthentic Products" className=""
              style={{ minWidth: '40vw' }}/>
              <a href="#pep-video" className="merry-font purple-text underline font-bold cursor-pointer text-base md:text-3xl">Lihat Informasi Tentang PEP</a>
              <img src={buttonInformasi} alt="Informasi Acara" className="w-44 mt-4 md:w-72"/>
            </div>
            {/* { props.isMobile && 
              <div className="px-5 flex flex-col items-center h-full w-full md:py-20 bg-red-200">
                <h3 className="purple-text merry-font text-center font-semibold md:text-3xl mt-5">Promo yang Bisa Kamu Dapatkan di Oilthentic Day 2021</h3>
                <p className="poppins-font purple-text text-justify text-xs mt-3 md:text-2xl"> Hadiah didapatkan untuk setiap pembelian PEP Young Living Indonesia di tanggal 25 dan 26 April 2021 berdasarkan total jumlah share yang dihasilkan.</p>
                <div className="flex flex-row justify-center items-center px-10 py-2">
                  <img src={product2} alt="Product 1" className="ml-10" style={{width: '8em'}}/>
                  <img src={product3} alt="Product 2" className="m-3" style={{width: '12em'}}/>
                </div>
              </div>
              } */}
      </div>
    </div>
    </>
  )
}

export default SecondSection
