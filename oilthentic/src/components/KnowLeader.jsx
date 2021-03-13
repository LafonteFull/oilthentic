import React from "react";

const KnowLeader = () => {

  return (
    <div className='md:w-1/3 lg:w-1/3 w-full justify-center'>
      <div className="my-10 mx-auto p-5 rounded-md shadow-sm border-solid border border-gray-200"
      style={{minWidth: '300px'}}>
        <form className="flex justify-center flex-row">
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base text-gray-700">
              <div className="flex-1 flex-col">
                <label className="leading-loose">Name</label>
                <input
                  name="Name"
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="e.g  John Doe"
                  // onChange={onChange}
                />
              </div>
              <div className="flex-1 flex-col">
                <label className="leading-loose">Email</label>
                <input
                  name="email"
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="e.g  johndoe@mail.com"
                  // onChange={onChange}
                />
              </div>
              <div className="flex-1 flex-col">
                <label className="leading-loose">Phone Number</label>
                <input
                  name="phone_number"
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="e.g +6281x-xxxx-xxxx"
                  // onChange={onChange}
                />
              </div>
              <div className="flex-1 flex-col">
                <label className="leading-loose">Location</label>
                <select id="location" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="yogyakarta">Yogyakarta</option>
                </select>
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

export default KnowLeader