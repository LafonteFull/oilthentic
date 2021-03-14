import React, { useState } from "react";

const NoLeader = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    location: ''
  })

  const onChange = (e) => {
    let { name, value } = e.target;
    const newInput = { ...userInput, [name]: value };
    setUserInput(newInput);
  };

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='md:w-1/3 lg:w-1/3 w-full justify-center'>
      <div className="my-10 mx-auto p-5 rounded-md shadow-sm border-solid border border-gray-200">
        <form className="flex justify-center flex-row">
          <div className="divide-y divide-gray-200 w-full px-5">
            <div className="py-8 text-base text-gray-700 ">
              <div className="flex-1 flex-col mb-2">
                <label className="leading-loose">Name</label>
                <input
                  name="name"
                  type="text"
                  className="block w-full py-3 px-1 mt-2 
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  placeholder="e.g  John Doe"
                  onChange={onChange}
                />
              </div>
              <div className="flex-1 flex-col mb-2">
                <label className="leading-loose">Email</label>
                <input
                  name="email"
                  type="text"
                  className="block w-full py-3 px-1 mt-2 
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  placeholder="e.g  johndoe@mail.com"
                  onChange={onChange}
                />
              </div>
              <div className="flex-1 flex-col mb-2">
                <label className="leading-loose">Phone Number</label>
                <input
                  name="phone_number"
                  type="text"
                  className="block w-full py-3 px-1 mt-2 
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  placeholder="e.g +6281x-xxxx-xxxx"
                  onChange={onChange}
                />
              </div>
              <div className="pt-4 flex items-center space-x-4">
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

export default NoLeader