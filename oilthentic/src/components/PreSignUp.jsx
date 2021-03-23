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
    <div id="pre-signup" className=" merry-font min-w-screen text-white overflow-hidden flex justify-center presignup z-2"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="w-screen h-full bg-center flex justify-center"
        style={{ backgroundImage: `url(${bgMobile3})`, backgroundSize: 'cover', height: '28rem' }} >
          <div className="px-10 flex flex-col mt-5 items-center">
            <h2 className="merry-font text-lg text-center mt-2 font-semibold">Daftar Di Sini Untuk Ikut <br/> Oilthentic Day 2021</h2>
            <form
              onSubmit={onSubmit}
              className="flex">
                <div className="w-full px-5">
                    <div className="flex-1 flex-col">
                      <label className="text-xs">Full Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="block text-sm w-full py-2 px-1 mt-1 appearance-none 
                         pl-2 text-gray-800
                        focus:text-gray-800 focus:outline-none "
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex-1 flex-col">
                      <label className="text-xs">Email</label>
                      <input
                        name="email"
                        type="text"
                        required
                        className="block text-sm w-full py-2 px-1 mt-1 appearance-none 
                         pl-2 text-gray-800
                        focus:text-gray-800  focus:outline-none "
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex-1 flex-col justify-center">
                      <label className="text-xs">Phone Number</label>
                      <div className="flex flex-row items-center">
                        <div className="inline-block w-10 text-gray-700 text-sm py-2 px-1 mt-1 bg-gray-100 ">
                          <p >+62</p>
                        </div>
                        <input
                          name="phone_number"
                          type="text"
                          className="inline-block text-sm w-full py-2 px-1 mt-1 appearance-none 
                          pl-15 text-gray-800
                          focus:text-gray-800 focus:outline-none "
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex-col">
                    <input
                        type="checkbox"
                        className="w-3 h-3 rounded-lg mr-2 mt-2"
                        required
                      />
                      <label className="inline"
                      style={{ fontSize: '.4rem'}}>I Agree to Young Living Indonesia's Terms of Service and Privacy Policy</label>
                    </div>
                    <div className="w-full flex items-center justify-center -top-2">
                      <button type="submit" >
                        <img src={buttonKirim} alt="submit" className="w-44"/>
                      </button>
                    </div>
                </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PreSignUp
