import React from "react";

const ModalInfoAcara = ({ closeModal }) => {
  
  return (
  <>
    <div
      className="justify-center poppins-font items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl px-5">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex justify-center items-center p-3 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-xl text-center text-gray-800 font-semibold">Oilthentic Day 2021
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative px-5 flex-auto">
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit soluta eveniet magnam dolor. Quisquam, possimus deleniti? Iure amet accusamus, veritatis odio ducimus animi aspernatur, ea autem numquam ullam ex.
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-gray-600 hover:text-gray-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default ModalInfoAcara