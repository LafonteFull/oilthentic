import React from 'react'
import { bgMobile2, bgWeb2, buttonInformasi, product1, product2, product3 } from '../assets/index'
import { ThirdSection } from '../components/index'
 
const SecondSection = (props) => {
  return (
    <>
    <div className="merry-font h-screen overflow-hidden broken-white-1 h-full"
    style={{ backgroundColor: '#E8E3DC', minWidth: '100vw' }}>
      <div className="w-screen h-full bg-center bg-cover flex py-5 justify-center items-center"
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile2})` : `url(${bgWeb2})`, backgroundSize: 'cover' }} >
          <div className="px-5 flex flex-col w-full h-full ">
            <p className="poppins-font px-2 md:px-40 purple-text text-justify text-xs md:text-xl md:font-semibold">Dengan cara share acara ini di social media Anda, maka Anda sudah berkontribusi untuk mendapatkan promo lebih banyak pada saat Oilthentic Day 2021. Ajak teman Anda untuk ikut gerakan ini untuk mendapatkan semua promo yang tersedia!</p>
            <div className="px-10 flex items-center flex-col">
              <img src={product1} alt="Oilthentic Products" className="md:w-2/4"/>
              <a href="#pep-video" className="merry-font purple-text underline font-bold cursor-pointer text-base md:text-lg">Lihat Informasi Tentang PEP</a>
              <img src={buttonInformasi} alt="Informasi Acara" className="w-44 mt-4 md:w-64"/>
            </div>
                { props.isMobile && 
                  <div className="flex w-full justify-center h-full flex-col items-center px-2 ">
                   <h3 className="purple-text merry-font text-center font-semibold md:text-3xl mt-5">Promo yang Bisa Kamu Dapatkan di Oilthentic Day 2021</h3>
                   <p className="poppins-font purple-text text-justify text-xs mt-3 md:text-2xl"> Hadiah didapatkan untuk setiap pembelian PEP Young Living Indonesia di tanggal 25 dan 26 April 2021 berdasarkan total jumlah share yang dihasilkan.</p>
                   <div className="flex flex-row justify-center items-center px-10 py-2">
                     <img src={product2} alt="Product 1" className="ml-10" style={{width: '8em'}}/>
                     <img src={product3} alt="Product 2" className="m-3" style={{width: '12em'}}/>
                   </div>
                 </div>
                 }
        </div>
      </div>
    </div>
    { !props.isMobile && <ThirdSection /> }
    </>
  )
}

export default SecondSection
