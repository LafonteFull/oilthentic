import React, { useState, useEffect } from 'react'
import { Hero, SecondSection, PreSignUp, MileStone1, MileStone2, PEP, KeuntunganMember, ThirdSection } from '../components'
import SignUp from '../components/SignUp'

const Thankyou = () => {
  
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
    <div>
      <Hero isMobile={isMobile} page={'thankyou'}/>
      <SignUp isMobile={isMobile} />
      <KeuntunganMember isMobile={isMobile}/>
      <MileStone1 isMobile={isMobile}/>
      <MileStone2 isMobile={isMobile}/>
    </div>
  )
}

export default Thankyou
