import React from 'react'
import brandlogo from '../assets/Logo.png'
import { buttonBeliSekarang, igFooter, ytFooter, siteFooter } from '../assets/index'

const Footer = () => {
  return (
    <footer>
      <div className="purple-g w-screen py-5 purple-bg flex flex-row justify-between px-10 md:px-20">
        <div className="flex flex-col justify-center mr-2">
          <h2 className="merry-font font-bold text-white text-sm md:text-xl">Beli PEP Young Living</h2>
          <p className="poppins-font text-xs text-white md:text-base">Untuk Kamu yang Tidak Suka Menunggu</p>
        </div>
        <div className="">
          <img src={buttonBeliSekarang} alt="Beli sekarang" className="w-36 md:w-60"/>
        </div>
      </div>
      <div className="purple-gradient2 px-8 flex flex-col md:px-20">
        <div className="flex flex-row justify-between border-b-2 border-white py-5">
          <img src={brandlogo} alt="Young Living"
            // style={{width: '190px'}}
            className="w-40 h-full"/>
          <div className="flex flex-row">
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/youngliving_indonesia/?hl=en'>
              <img src={igFooter} alt="Instagram YL" className="mr-2 mt-5 h-6 w-6 md:w-9 md:h-9"/>
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.youtube.com/channel/UCXvy0RRhRanzsSH2FRND5LA' >
              <img src={ytFooter} alt="Youtube YL" className="mr-2 mt-5 h-6 w-6 md:w-9 md:h-9"/>
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.youngliving.com/id_ID/'>
              <img src={siteFooter} alt="Website YL" className="mr-2 mt-5 h-6 w-6 md:w-9 md:h-9"/>
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-sm text-white merry-font py-3 mb-10">Oilthentic Day 2021 - Young Living Indonesia</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
