import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

const OTPForm = () => {
  const [OTP, setOTP] = useState({

  })
  const history = useHistory()
  const { user } = useSelector((state) => state.user)
  console.log(user, '<<< user info from redux')

  // const handleSubmit = () => {
  //   history.push('/thank-you') // sementara
  // }

  const onChange = (e) => {
    let { name, value } = e.target;
    const newInput = { ...OTP, [name]: value };
    setOTP(newInput);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(OTP);
    let temp = ''
    for (const key in OTP) {
      temp+= OTP[key]
    }
    console.log(temp);
    if (temp.length === 6)history.push('/thank-you')
  }

  return (
    <div className='md:w-1/3 lg:w-1/3 w-full justify-center mt-20'>
      <div className="my-10 mx-auto p-5 rounded-md shadow-sm border-solid border border-gray-200">
        <form
        onSubmit={onSubmit}
        className="flex justify-center flex-row">
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base text-gray-900">
              <div className="">
                <h2 className="text-xl text-center md:text-4xl lg:text-4xl font-bold">OTP Verification</h2>
                <h2 className="text-sm italic text-center m-2 text-gray-700">Please enter the code that's just sent to your phone.</h2>
              </div>
              <div className="grid grid-cols-6 gap-2 h-14 mt-10">
                  <input
                    name="first"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    onChange={onChange}
                  />
                  <input
                    name="second"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    onChange={onChange}
                  />
                  <input
                    name="third"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    onChange={onChange}
                  />
                  <input
                    name="fourth"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    onChange={onChange}
                  />
                  <input
                    name="fifth"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    onChange={onChange}
                  />
                  <input
                    name="sixth"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    onChange={onChange}
                  />
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  type="submit"
                  className="inline flex justify-center items-center w-full text-gray-500 px-4 py-3 hover:text-gray-700"
                >
                  Request New OTP
                </button>
              </div>
              <div className="pt-4 flex items-center space-x-4 mt-10">
                  <button
                    type="submit"
                    className="bg-white flex justify-center items-center w-full text-black px-4 py-3 rounded-md border-solid border border-gray-400 hover:bg-gray-400"
                  >
                    Continue
                  </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OTPForm