import React from 'react'
import { bgMobile9, benefit1, benefit2, benefit3, benefit4, benefit5 } from '../assets/index'

const KeuntunganMember = () => {
  return (
    <div id="KeuntunganMember-video" className="w-screen relative merry-font h-screen overflow-hidden broken-white-1 z-2">
      <div className="min-w-screen relative top-0 h-full bg-center bg-cover flex py-5"
        style={{ backgroundImage: `url(${bgMobile9})`, backgroundSize: 'cover' }} >
          <div className="px-5 h-full flex flex-col justify-center items-center content-center w-screen py-10 mt-10">
            <h3 className="purple-text merry-font text-center font-bold mt-10 text-xl">Keuntungan Menjadi Member Young Living Indonesia</h3>
            <div className="flex flex-col justify-center items-center px-10">
              <img src={benefit1} className="m-2 w-96" alt="Diskon 24% dari harga retail untuk semua produk yang Anda inginkan"/>
              <img src={benefit2} className="m-2 w-96" alt="Potongan ongkos kirim dengan program Essential Rewards"/>
              <img src={benefit3} className="m-2 w-96" alt="Hadian dan produk gratis melalui program Loyalti Essential Awards"/>
              <img src={benefit4} className="m-2 w-96" alt="Temukan Inspirasi di acara-acara Young Living"/>
              <img src={benefit5} className="m-2 w-96" alt="Manfaat promosi unik yang disediakan Young Living"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KeuntunganMember
