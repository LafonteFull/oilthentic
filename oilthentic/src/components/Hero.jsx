import React from 'react'
import  { bgMobile1, buttonDaftar, mobileTitle } from '../assets/index'

const Hero = (props) => {
  // const [isMobile, setMobile] = useState(false)
  // useEffect(() => {
  //   if (props.isMobile) setMobile(true)
  //   else setMobile(false)
  // }, [props])
  return (
    <div className="w-screen antialiased relative merry-font h-screen overflow-hidden broken-white-1"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="min-w-screen absolute top-0 h-full bg-center bg-cover flex z-10"
        style={{ backgroundImage: props.isMobile ? `url(${bgMobile1})` : `url(${bgMobile1})`, backgroundSize: 'cover' }} >
        <div className="px-5 flex flex-col justify-center items-center content-center w-screen">
          <img src={mobileTitle} alt="Road to Oilthentic Day 2021" className="w-full -mt-10 mb-5"/>
          <h2 className="purple-text leading-tight font-semibold text-center"
          style={{fontSize: '.9rem'}}>Jadilah Bagian Dari Gerakan Ini <br/> Dan Dapatkan Promo Lebih Banyak!</h2>
          <h3 className="mt-5 text-black text-center text-sm font-semibold">123,000 Orang sudah menjadi bagian</h3>
          <a href="#pre-signup"><img src={buttonDaftar} alt="Daftar Sekarang" className="w-40 mt-2" /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero