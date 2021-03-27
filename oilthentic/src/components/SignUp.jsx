import React from "react";
import { SwitchCategory } from ".";
import { bgWeb4 } from '../assets/index'

const SignUp = () => {
  return (
    <div className="text-gray-900 bgImage flex items-center justify-center"
    style={{ backgroundImage: `url(${bgWeb4})`, backgroundColor: '#E8E3DC' }}>
      <SwitchCategory />
    </div>
  )
}

export default SignUp