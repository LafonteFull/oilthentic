import React from "react";

const OTPForm = () => {

  return (
    <div className='w-1/3 justify-center mt-20'>
      <div className="my-10 mx-auto bg-gray-50 p-5 rounded-md shadow-sm border-solid border border-gray-200">
        <form className="flex justify-center flex-row">
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base text-gray-700">
              <div className="mx-28 flex flex-col">
                <h2 className="text-4xl font-bold">OTP Code</h2>
              </div>
              <div className="grid grid-cols-6 gap-2 h-14 mt-10">
                  <input
                    name="Name"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    // onChange={onChange}
                  />
                  <input
                    name="email"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    // onChange={onChange}
                  />
                  <input
                    name="phone_number"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    // onChange={onChange}
                  />
                  <input
                    name="phone_number"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    // onChange={onChange}
                  />
                  <input
                    name="phone_number"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    // onChange={onChange}
                  />
                  <input
                    name="phone_number"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    // onChange={onChange}
                  />
              </div>
              <div className="pt-4 flex items-center space-x-4 mt-10">
                <button
                  type="submit"
                  className="inline bg-gray-50 flex justify-center items-center w-full text-black px-4 py-3"
                >
                  Request New OTP
                </button>
              </div>
              <div className="pt-4 flex items-center space-x-4 mt-10">
                <button
                  type="submit"
                  className="bg-white flex justify-center items-center w-full text-black px-4 py-3 rounded-md border-solid border border-gray-400"
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