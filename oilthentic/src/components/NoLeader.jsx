import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buttonKirim } from '../assets/index'
import { signUp } from '../store/actions/authAction';


const NoLeader = () => {
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
    <div className='md:w-1/3 lg:w-1/3 w-full justify-center mt-28'>
        <form
        onSubmit={onSubmit}
        className="flex justify-center items-center">
          <div className="px-5">
            <div className="flex-1 flex-col md:mt-10">
              <label className="text-xs md:text-lg">Location</label>
              <select
              required
              name='location'
              onChange={onChange}
              id="location" className="rounded-none text-sm md:text-lg w-full py-2 px-1 mt-1 
              pl-2 text-gray-800
              focus:text-gray-800 focus:outline-none">
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
                <option value="yogyakarta">Yogyakarta</option>
              </select>
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
  )
}

export default NoLeader