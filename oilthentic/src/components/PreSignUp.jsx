import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/authAction';
import { bgMobile3, bgWeb4, buttonKirim } from '../assets/index'

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
    history.push('/thank-you')
    dispatch(signUp({...userInput, location: null}))
  }


  return (
    <div id="pre-signup" className="merry-font bgImage"
    style={{ backgroundColor: '#E8E3DD', backgroundImage: props.isMobile ? `url(${bgMobile3})` : `url(${bgWeb4})` }}>
      <div className="h-full bg-center flex justify-center items-center" >
          <div className="px-10 flex text-white flex-col w-full items-center -mt-20">
            <h2 className="merry-font text-white text-lg text-center mt-10 font-semibold md:text-3xl">Daftar Di Sini Untuk Ikut <br/> Oilthentic Day 2021</h2>
            <form
              onSubmit={onSubmit}
              className="flex justify-center items-center">
                <div className=" px-5">
                    <div className="flex-1 flex-col md:mt-10">
                      <label className="text-xs md:text-lg">Full Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="rounded-none block text-sm md:text-lg w-full py-2 px-1 mt-1 appearance-none 
                         pl-2 text-gray-800
                        focus:text-gray-800 focus:outline-none "
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex-1 flex-col mt-4">
                      <label className="text-xs md:text-lg">Email</label>
                      <input
                        name="email"
                        type="text"
                        required
                        className="rounded-none block text-sm md:text-lg w-full py-2 px-1 mt-1 appearance-none 
                         pl-2 text-gray-800
                        focus:text-gray-800 focus:outline-none "
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex-1 flex-col justify-center mt-4">
                      <label className="text-xs md:text-lg">Phone Number</label>
                      <div className="flex flex-row items-center">
                        <div className="inline-block w-10 md:w-16 text-center text-gray-700 text-sm md:text-lg py-2 px-1 mt-1 bg-gray-100 ">
                          <p >+62</p>
                        </div>
                        <input
                          name="phone_number"
                          type="text"
                          className="rounded-none inline-block text-sm md:text-lg w-full py-2 px-1 mt-1 appearance-none 
                          pl-2 text-gray-800
                          focus:text-gray-800 focus:outline-none "
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex-col mt-4">
                    <input
                        type="checkbox"
                        className="w-3 h-3 md:w-5 md:h-5 rounded-lg mr-2 mt-2"
                        required
                      />
                      <label className="inline text-xs md:text-base">I Agree to Young Living Indonesia's Terms of Service and Privacy Policy</label>
                    </div>
                    <div className="w-full flex items-center justify-center mt-3">
                      <button type="submit" >
                        <img src={buttonKirim} alt="submit" className="w-44 md:w-72"/>
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
