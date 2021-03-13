import React from "react";

export function NoLeader() {

    return (
        <div>
            <div className="flex justify-center">
                <button className="bg-black rounded-lg font-sans text-sm text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">No Leader</button>
                <button className="">Know Leader</button>
            </div>
            <div className="max-w-md mx-auto my-10 bg-black p-5 rounded-md shadow-sm">

            <form className="flex justify-center flex-row">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Title</label>
                  <input
                    name="title"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Movie title"
                    // onChange={onChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Overview</label>
                  <input
                    name="overview"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Movie Overview"
                    // onChange={onChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Popularity</label>
                  <input
                    name="popularity"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Movie Popularity"
                    // onChange={onChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Genre</label>
                <input
                  name="tags"
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Movie Genre"
                //   onChange={onChange}
                />
              </div>
            </div>
            </form>
            </div>
        </div>
    )
}