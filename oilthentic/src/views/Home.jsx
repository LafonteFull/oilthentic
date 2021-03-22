import React, { useState, useEffect } from 'react'
import { Hero, SecondSection, PreSignUp, MileStone1, MileStone2, PEP, KeuntunganMember } from '../components'

const Home = () => {
  
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const detectScreenWidth = () => {
      if (window.innerWidth < 700) setMobile(true)
      else setMobile(false)
    }

    window.addEventListener('resize', detectScreenWidth)

    return () => {
      window.removeEventListener('resize', detectScreenWidth)
    }
  }, [isMobile])

  return (
    <div>
      <Hero isMobile={isMobile}/>
      <SecondSection />
      <PreSignUp isMobile={isMobile}/>
      <MileStone1 isMobile={isMobile}/>
      <MileStone2 isMobile={isMobile}/>
      <PEP isMobile={isMobile}/>
      <KeuntunganMember isMobile={isMobile}/>
    </div>
  )
}

export default Home
