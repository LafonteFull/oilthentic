import React, { useState, useEffect } from 'react'
import { Hero, SecondSection, PreSignUp, MileStone1, MileStone2, PEP, KeuntunganMember, ThirdSection } from '../components'
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here



const Home = () => {
  
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const detectScreenWidth = () => {
      if (window.innerWidth < 1000) setMobile(true)
      else setMobile(false)
    }

    window.addEventListener('resize', detectScreenWidth)

    return () => {
      window.removeEventListener('resize', detectScreenWidth)
    }
  }, [isMobile])

  return (
    <div className="overflow-x-hidden merry-font">
      <ScrollUpButton />
      <Hero isMobile={isMobile}/>
      <SecondSection isMobile={isMobile}/>
      <ThirdSection isMobile={isMobile} /> 
      <PreSignUp isMobile={isMobile}/>
      <MileStone1 isMobile={isMobile}/>
      <MileStone2 isMobile={isMobile}/>
      <PEP isMobile={isMobile}/>
      <KeuntunganMember isMobile={isMobile}/>
    </div>
  )
}

export default Home
