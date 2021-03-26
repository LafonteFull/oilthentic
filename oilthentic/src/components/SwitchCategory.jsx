import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signUp } from '../store/actions/authAction';
import { bgWeb4 } from '../assets/index'
import { Link, useLocation } from "react-router-dom";
import { KnowLeader, NoLeader } from ".";
import { Route, Switch } from "react-router-dom";



const SwitchCategory = () => {
  const { pathname } = useLocation()
  // const dispatch = useDispatch()
  // const [userInput, setUserInput] = useState()
  const [category, setCategory] = useState(false);

  // const onChange = (e) => {
  //   let { name, value } = e.target;
  //   const newInput = { ...userInput, [name]: value };
  //   setUserInput(newInput);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(signUp({...userInput, location: null}))
  // }

  const backgroundClass1 = !category ? 'purple-bg text-white' : 'bg-gray-200 text-gray-500'
  const backgroundClass2 = !category ? 'bg-gray-200  text-gray-500' : 'purple-bg text-white'

  return (
    <>
    <div id="signup" className="min-w-screen merry-font h-screen overflow-hidden broken-white-1"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="h-full bg-center flex justify-center items-center bghalf"
        style={{ backgroundImage: `url(${bgWeb4})` }} >
          <div className="px-10 flex text-white flex-col w-full items-center mt-15 md:mt-0 focus:outline-none">
            <div className="flex justify-center mt-20 bg-gray-200 rounded-xl z-10 p-1">
                <button className={backgroundClass1 + "focus:outline-none rounded-lg mr-1 font-bold md:w-40 w-32 text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:text-gray-700"}
                onClick={() => setCategory(false)}>No Leader</button>
                <button className={backgroundClass2 + "focus:outline-none rounded-lg font-bold md:w-40 w-32 text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:text-gray-700"}
                onClick={() => setCategory(true)}>Know Leader</button>
            </div>
            {!category && <NoLeader />}
            {category && <KnowLeader />}
        </div>
      </div>
    </div>
    </>
  )
}

export default SwitchCategory