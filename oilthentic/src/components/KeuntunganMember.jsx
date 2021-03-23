import React from 'react'
import { bgMobile9, bgWeb6, benefit1, benefit2, benefit3, benefit4, benefit5 } from '../assets/index'

const KeuntunganMember = (props) => {
  return (
    <div id="KeuntunganMember-video" className="merry-font overflow-hidden"
    style={{backgroundColor: '#E8E3DD'}}>
      <div className="min-w-screen top-0 bg-center bg-cover flex pb-5"
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile9})` : `url(${bgWeb6})` , backgroundSize: 'cover' }} >
          <div className="h-full flex flex-col justify-center items-center content-center w-screen py-5 mt-20">
            <h3 className="purple-text merry-font text-center font-bold text-xl my-8 md:text-4xl">Keuntungan Menjadi Member <br /> Young Living Indonesia</h3>
            <div className="flex flex-col md:flex-row md:flex-wrap md:w-3/4 items-center justify-center px-5">
              <img src={benefit1} className="m-2 md:m-3 w-72 md:w-96" alt="Diskon 24% dari harga retail untuk semua produk yang Anda inginkan"/>
              <img src={benefit2} className="m-2 md:m-3 w-72 md:w-96" alt="Potongan ongkos kirim dengan program Essential Rewards"/>
              <img src={benefit3} className="m-2 md:m-3 w-72 md:w-96" alt="Hadian dan produk gratis melalui program Loyalti Essential Awards"/>
              <img src={benefit4} className="m-2 md:m-3 w-72 md:w-96" alt="Temukan Inspirasi di acara-acara Young Living"/>
              <img src={benefit5} className="m-2 md:m-3 w-72 md:w-96" alt="Manfaat promosi unik yang disediakan Young Living"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KeuntunganMember
