import React from 'react'
import { bgWeb3, product2, product3, bgr10, bothproducts } from '../assets/index'

const ThirdSection = (props) => {
  return (
    <div className="merry-font bgrepeat w-full"
    style={{ backgroundColor: '#E8E3DC', backgroundImage: `url(${bgr10})` }}>
      <div className="px-5 flex flex-col justify-center items-center w-full md:py-20 py-10">
            <div className="flex flex-col items-center px-2 md:mt-5 w-full">
              <h3 className="purple-text merry-font text-center font-semibold md:text-3xl xl:text-4xl"
              style={{ lineHeight: '1.5' }}>Promo yang Bisa Kamu Dapatkan di <br/> Oilthentic Day 2021</h3>
              <p className="poppins-font purple-text text-justify text-xs mt-3 md:text-3xl md:mt-20 md:px-10 lg:px-20"> Hadiah didapatkan untuk setiap pembelian PEP Young Living Indonesia di tanggal 25 dan 26 April 2021 berdasarkan total jumlah share yang dihasilkan.</p>
              <div className="flex flex-row justify-center items-center md:px-10 py-2 mt-2 w-full ">
                <img src={bothproducts} alt="Products" className="w-full lg:w-3/4 xl:w-2/4" style={{ minWidth: '40vw' }} 
                //  style={{ width: props.isMobile ? '90vw' : '100rem' }}  
                 />
                {/* <img src={product2} alt="Discount 5%" className="ml-10 mr-5 w-32"
                  style={{ width: props.isMobile ? '155px' : '400px' }} />
                <img src={product3} alt="Discount 10%" className="m-3 w-40" 
                 style={{ width: props.isMobile ? '200px' : '500px' }}  /> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection
