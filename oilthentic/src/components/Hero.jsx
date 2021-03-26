import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import  { bgMobile1, bgWeb1, buttonDaftar, mobileTitle, mobileTitleThankYou, buttonInformasi } from '../assets/index'
import { ModalInfoAcara } from './index'

const Hero = (props) => {
  const [showModal, setShowModal] = useState(false)
  const { totalShareAll } = useSelector(state => state.totalShared)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    // <div className="merry-font h-full w-full bg-red-200 flex justify-center">
      <div className="bgImage" id="herobanner"
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile1})` : `url(${bgWeb1})`,
        backgroundColor: '#E8E3DD'}} >
        <div className="px-5 flex flex-col justify-center items-center h-full w-full mt-10">
        <img src={props.page === 'thankyou' ? mobileTitleThankYou : mobileTitle} alt="Road to Oilthentic Day 2021" className="landingtitle -mt-40 mb-10"
          style={{ width: props.isMobile ? '20rem' : '40rem' }} 
          />
          { props.page !== 'thankyou' && (
            <>
              <h2 className="purple-text leading-tight font-bold text-center text-base md:text-xl">Jadilah Bagian Dari Gerakan Ini <br/> Dan Dapatkan Promo Lebih Banyak!</h2>
              <h3 className="mt-3 text-gray-900 text-center text-sm font-semibold text-base md:text-xl">{totalShareAll.toLocaleString('id')} Orang sudah menjadi bagian</h3>
              <a href="#pre-signup" className="focus:outline-none"><img src={buttonDaftar} alt="Daftar Sekarang" className="w-44 mt-2 md:w-64" /></a>
            </>
          )}
          { props.page === 'thankyou' && (
            <div className='flex justify-center mt-10 rounded-lg p-1 z-10'>
              <a href="#signup"><img src={buttonDaftar} alt="Daftar Sekarang" className="w-44 mt-2 md:w-64 focus:outline-none " /></a>
              <button onClick={() => setShowModal(true)} className="focus:outline-none "
              ><img src={buttonInformasi} alt="Daftar Sekarang" className="w-44 mt-2 md:w-64 focus:outline-none " /></button>
            </div>
          )}
           { showModal && <ModalInfoAcara closeModal={closeModal} /> }
        </div>
      </div>
    // </div>
  )
}

export default Hero