import React, { useState } from 'react'
import { bgWeb2, buttonInformasi, product1 } from '../assets/index'
import { ModalInfoAcara } from '../components/index'
 
const SecondSection = (props) => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="merry-font bghalf"
    style={{ backgroundColor: '#E8E3DC', backgroundImage: `url(${bgWeb2})` }}>
      <div className="px-5 flex flex-col justify-center items-center w-full md:py-20">
        <p className="poppins-font px-2 md:px-40 purple-text text-justify text-xs md:text-3xl md:font-semibold">Dengan cara share acara ini di social media Anda, maka Anda sudah berkontribusi untuk mendapatkan promo lebih banyak pada saat Oilthentic Day 2021. Ajak teman Anda untuk ikut gerakan ini untuk mendapatkan semua promo yang tersedia!</p>
        <div className="px-10 flex items-center flex-col">
          <img src={product1} alt="Oilthentic Products" className=""
          style={{ minWidth: '40vw' }}/>
          <a href="#pep-video" className="merry-font purple-text underline font-bold cursor-pointer text-base md:text-3xl">Lihat Informasi Tentang PEP</a>
          <img src={buttonInformasi} alt="Informasi Acara" className="w-44 mt-4 md:w-72" onClick={() => setShowModal(true)}/>
        </div>
         {/* MODAL */}
         { showModal && <ModalInfoAcara closeModal={closeModal} /> }
        {/* END OF MODAL */}
      </div>
    </div>
  )
}

export default SecondSection
