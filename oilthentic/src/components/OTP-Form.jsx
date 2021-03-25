import React, { useState } from "react";

const OTPForm = (props) => {
  console.log(props, 'ini dari otp form');
  const [OTP, setOTP] = useState({})

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
    if (temp.length === 6) props.addMember(e)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex justify-center flex-row px-10">
          <div className="py-8 text-base text-gray-900">
            <div className="">
              <h2 className="text-xl text-center md:text-4xl lg:text-4xl font-bold">Verifikasi nomor handphone Anda</h2>
              <h2 className="text-sm italic text-center m-2 text-gray-700">Masukkan kode OTP terkirim.</h2>
            </div>
            <div className="grid grid-cols-6 gap-1 h-12 mt-5">
                <input
                  name="first"
                  type="text"
                  maxLength="1"
                  className="md:px-4 lg:px-4 lg:py-2 md:py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  onChange={onChange}
                />
                <input
                  name="second"
                  type="text"
                  maxLength="1"
                  className="md:px-4 lg:px-4 lg:py-2 md:py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  onChange={onChange}
                />
                <input
                  name="third"
                  type="text"
                  maxLength="1"
                  className="md:px-4 lg:px-4 lg:py-2 md:py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  onChange={onChange}
                />
                <input
                  name="fourth"
                  type="text"
                  maxLength="1"
                  className="md:px-4 lg:px-4 lg:py-2 md:py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  onChange={onChange}
                />
                <input
                  name="fifth"
                  type="text"
                  maxLength="1"
                  className="md:px-4 lg:px-4 lg:py-2 md:py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  onChange={onChange}
                />
                <input
                  name="sixth"
                  type="text"
                  maxLength="1"
                  className="md:px-4 lg:px-4 lg:py-2 md:py-2 border focus:ring-gray-500 focus:border-gray-900 w-full text-center sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  onChange={onChange}
                />
            </div>
            <div className="pt-4 flex items-center space-x-4">
              <button
                type="submit"
                className="inline flex justify-center text-sm items-center w-full text-gray-400 px-4 py-3 hover:text-gray-700"
              >
                Kirim ulang kode OTP
              </button>
            </div>
            <div className="pt-4 flex items-center space-x-4 ">
                <button
                  type="submit"
                  className="bg-white flex justify-center items-center w-full text-black px-4 py-3 rounded-md border-solid border border-gray-400 hover:text-gray-600"
                >
                  Submit
                </button>
            </div>
        </div>
      </form>
  )
}

export default OTPForm