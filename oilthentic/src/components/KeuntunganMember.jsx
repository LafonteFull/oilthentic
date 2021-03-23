import React from 'react'
import { bgMobile9, benefit1, benefit2, benefit3, benefit4, benefit5 } from '../assets/index'

const KeuntunganMember = () => {
  return (
    <div id="KeuntunganMember-video" className="relative merry-font overflow-hidden"
    style={{backgroundColor: '#E8E3DD'}}>
      <div className="min-w-screen top-0 bg-center bg-cover flex pb-5"
        style={{ backgroundImage: `url(${bgMobile9})`, backgroundSize: 'cover' }} >
          <div className="h-full flex flex-col justify-center items-center content-center w-screen py-5 mt-20">
            <h3 className="purple-text merry-font text-center font-bold text-xl my-8">Keuntungan Menjadi Member <br /> Young Living Indonesia</h3>
            <div className="flex flex-col justify-center items-center px-5">
              <img src={benefit1} className="m-2 w-72" alt="Diskon 24% dari harga retail untuk semua produk yang Anda inginkan"/>
              <img src={benefit2} className="m-2 w-72" alt="Potongan ongkos kirim dengan program Essential Rewards"/>
              <img src={benefit3} className="m-2 w-72" alt="Hadian dan produk gratis melalui program Loyalti Essential Awards"/>
              <img src={benefit4} className="m-2 w-72" alt="Temukan Inspirasi di acara-acara Young Living"/>
              <img src={benefit5} className="m-2 w-72" alt="Manfaat promosi unik yang disediakan Young Living"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KeuntunganMember
