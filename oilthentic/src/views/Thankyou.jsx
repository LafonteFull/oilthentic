import React, { useState, useEffect } from 'react'
import { Hero, SecondSection, PreSignUp, MileStone1, MileStone2, PEP, KeuntunganMember, ThirdSection, Milestones } from '../components'
import SignUp from '../components/SignUp'
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here


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
      <ScrollUpButton />
      <Hero isMobile={isMobile} page={'thankyou'}/>
      <KeuntunganMember isMobile={isMobile}/>
      <SignUp isMobile={isMobile} />
      <Milestones isMobile={isMobile} />
      {/* <MileStone1 isMobile={isMobile}/>
      <MileStone2 isMobile={isMobile}/> */}
    </div>
  )
}

export default Thankyou
