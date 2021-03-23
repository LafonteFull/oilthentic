import React from 'react'
import  { bgMobile1, bgWeb1, buttonDaftar, mobileTitle } from '../assets/index'

const Hero = (props) => {
  // const [isMobile, setMobile] = useState(false)
  // useEffect(() => {
  //   if (props.isMobile) setMobile(true)
  //   else setMobile(false)
  // }, [props])
  return (
    <div className="merry-font h-screen overflow-hidden broken-white-1"
    style={{ backgroundColor: '#E8E3DC', minWidth: '100vw' }}>
      <div className="w-screen h-full bg-center bg-cover flex flex-col justify-center"
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile1})` : `url(${bgWeb1})`, backgroundSize: 'cover' }} >
        <div className="px-5 flex flex-col justify-center items-center content-center w-screen">
          <img src={mobileTitle} alt="Road to Oilthentic Day 2021" className="landingtitle"
          style={{ width: props.isMobile ? '20rem' : '40rem' }} 
          />
          <h2 className="purple-text leading-tight font-bold text-center text-base md:text-xl">Jadilah Bagian Dari Gerakan Ini <br/> Dan Dapatkan Promo Lebih Banyak!</h2>
          <h3 className="mt-3 text-gray-900 text-center text-sm font-semibold text-base md:text-xl">123,000 Orang sudah menjadi bagian</h3>
          <a href="#pre-signup"><img src={buttonDaftar} alt="Daftar Sekarang" className="w-44 mt-2 md:w-64" /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero