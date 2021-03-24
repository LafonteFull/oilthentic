import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/authAction';
import { buttonKirim } from '../assets/index'
import { OTPForm } from ".";

const KnowLeader = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState()
  const [showModal, setShowModal] = useState(false)
  const [showOTP, setShowOTP] = useState(false)

  const onChange = (e) => {
    let { name, value } = e.target;
    const newInput = { ...userInput, [name]: value };
    setUserInput(newInput);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
    // history.push('/sign-up/otp')
    // dispatch(signUp(userInput))
  }

  const confirmOTP = (e) => {
    setShowOTP(true)
  }

  return (
    <div className='md:w-1/3 lg:w-1/3 w-full justify-center mt-5'>
        <form
        onSubmit={onSubmit}
        className="flex justify-center items-center">
          <div className="px-5">
            <div className="flex-1 flex-col md:mt-10">
              <label className="text-xs md:text-lg">Young Living ID</label>
              <div className="flex flex-row items-center">
                <input
                  name="YL_id"
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
        { showModal ? (
            <>
              <div
                className="justify-center poppins-font items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl px-5">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="relative p-5 flex-auto">
                      <p className="my-4 text-gray-700 text-lg leading-relaxed">Simpan informasi saya dan beri notifikasi leader Young Living di area terdekat?</p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-300 hover:text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="text-green-600 hover:text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowOTP(true)}
                      >
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* OTP */}
          { showOTP ? (
            <>
              <div
                className="justify-center poppins-font items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl px-5">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <OTPForm confirmOTP={confirmOTP} />
                    <button
                        className="text-gray-400 hover:text-gray-500 px-10 text-right background-transparent  px-6 py-2 -mt-5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={setShowOTP(false)}
                      >
                        Kembali
                      </button>
                    {/* <div className="relative p-5 flex-auto">
                      <p className="my-4 text-gray-700 text-lg leading-relaxed">Simpan informasi saya dan bergabung menjadi anggota Young Living Indonesia?</p>
                    </div> */}
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
    </div>
    // <div className='md:w-1/3 lg:w-1/3 w-full justify-center'>
    //   <div className="my-10 mx-auto p-5 rounded-md shadow-sm border-solid border border-gray-200">
    //   <form
    //     onSubmit={onSubmit}
    //     className="flex justify-center flex-row">
    //       <div className="divide-y divide-gray-200 w-full px-5">
    //         <div className="py-8 text-base text-gray-700 ">
    //           <div className="flex-1 flex-col mb-2">
    //             <label className="leading-loose">Name</label>
    //             <input
    //               name="name"
    //               type="text"
    //               className="block w-full py-3 px-1 mt-2 
    //               text-gray-800 appearance-none 
    //               border-b-2 border-gray-100
    //               focus:text-gray-500 focus:outline-none focus:border-gray-200"
    //               placeholder="e.g  John Doe"
    //               onChange={onChange}
    //             />
    //           </div>
    //           <div className="flex-1 flex-col mb-2">
    //             <label className="leading-loose">Email</label>
    //             <input
    //               name="email"
    //               type="text"
    //               className="block w-full py-3 px-1 mt-2 
    //               text-gray-800 appearance-none 
    //               border-b-2 border-gray-100
    //               focus:text-gray-500 focus:outline-none focus:border-gray-200"
    //               placeholder="e.g  johndoe@mail.com"
    //               onChange={onChange}
    //             />
    //           </div>
              // <div className="flex-1 flex-col mb-2">
              //   <label className="leading-loose">Phone Number</label>
              //   <input
              //     name="phone_number"
              //     type="text"
              //     className="block w-full py-3 px-1 mt-2 
              //     text-gray-800 appearance-none 
              //     border-b-2 border-gray-100
              //     focus:text-gray-500 focus:outline-none focus:border-gray-200"
              //     placeholder="e.g +6281x-xxxx-xxxx"
              //     onChange={onChange}
              //   />
              // </div>
    //           <div className="flex-1 flex-col mb-2">
    //             <label className="leading-loose">Location</label>
    //             <select
    //             name='location'
    //             onChange={onChange}
    //             id="location" className="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900
    //             w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
    //               <option value="jakarta">Jakarta</option>
    //               <option value="bandung">Bandung</option>
    //               <option value="yogyakarta">Yogyakarta</option>
    //             </select>
    //           </div>
    //           <div className="pt-4 flex items-center space-x-4 mt-5">
    //             <button
    //               type="submit"
    //               className="bg-white flex justify-center items-center w-full text-black px-4 py-3 rounded-md border-solid border border-gray-400 hover:bg-gray-400"
    //             >
    //               Continue
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  )
}

export default KnowLeader