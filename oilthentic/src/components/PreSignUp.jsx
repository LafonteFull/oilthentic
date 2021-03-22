import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/authAction';
import { bgMobile3, buttonKirim } from '../assets/index'

const PreSignUp = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState()

  const onChange = (e) => {
    let { name, value } = e.target;
    const newInput = { ...userInput, [name]: value };
    setUserInput(newInput);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    history.push('/sign-up/otp')
    dispatch(signUp({...userInput, location: null}))
  }


  return (
    <div className="w-screen relative merry-font text-white h-screen overflow-hidden broken-white-1 z-2 -top-20">
      <div className="min-w-screen relative top-0 h-full bg-center flex"
        style={{ backgroundImage: `url(${bgMobile3})`, backgroundSize: 'cover' }} >
          <div className="px-10 flex flex-col mt-10 items-center w-screen ">
            <h2 className="merry-font text-center text-xl font-semibold">Daftar Di Sini Untuk Ikut Oilthentic Day 2021</h2>
            <form
              onSubmit={onSubmit}
              className="flex justify-center flex-row">
                <div className="divide-y w-full px-5">
                  <div className="py-8 text-base ">
                    <div className="flex-1 flex-col mb-2">
                      <label className="leading-loose">Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="block w-full py-3 px-1 mt-2 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-100 focus:outline-none focus:border-gray-200"
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex-1 flex-col mb-2">
                      <label className="leading-loose">Email</label>
                      <input
                        name="email"
                        type="text"
                        required
                        className="block w-full py-3 px-1 mt-2 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-100 focus:outline-none focus:border-gray-200"
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex-1 flex-col mb-2 relative">
                      <label className="leading-loose">Phone Number</label>
                      <p className="absolute text-gray-400 text-lg border-2 border-gray-400 p-1 rounded-lg top-11 left-1">+62</p>
                      <input
                        name="phone_number"
                        type="number"
                        className="block w-full py-3 px-1 mt-2 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-100 focus:outline-none focus:border-gray-200"
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex-1 flex-col mb-2 relative">
                    <input
                        type="checkbox"
                        className="w-5 h-5 rounded-lg mr-2 mt-2"
                        required
                      />
                      <label className="leading-loose inline text-xs">I Agree to Young Living Indonesia's Terms of Service and Privacy Policy</label>
                    </div>
                    <div className="flex items-center justify-center">
                      <button type="submit">
                        <img src={buttonKirim} alt="submit" className="w-44"/>
                      </button>
                    </div>
                  </div>
                </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PreSignUp
