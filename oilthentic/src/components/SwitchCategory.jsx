import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/authAction';
import { bgWeb4 } from '../assets/index'
import { Link, useLocation } from "react-router-dom";
import { KnowLeader, NoLeader } from ".";
import { Route, Switch } from "react-router-dom";



const SwitchCategory = () => {
  const { pathname } = useLocation()
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

  const backgroundClass1 = pathname === '/thank-you' ? 'purple-bg text-white' : 'bg-gray-200 text-black'
  const backgroundClass2 = pathname === '/thank-you' ? 'bg-gray-200 text-black' : 'purple-bg text-white'

  return (
    <>
    <div id="signup" className="min-w-screen merry-font h-screen overflow-hidden broken-white-1"
    style={{ backgroundColor: '#E8E3DD' }}>
      <div className="h-full bg-center flex justify-center"
        style={{ backgroundImage: `url(${bgWeb4})` , backgroundSize: 'cover', width: '100vw' }} >
          <div className="px-10 flex text-white flex-col w-full items-center mt-15 md:mt-0">
            <div className="flex justify-center mt-20 bg-gray-200 rounded-xl z-10">
                <Link className={backgroundClass1 + " rounded-lg font-bold w-40 text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:text-gray-700"}
                to="/thank-you">No Leader</Link>
                <Link className={backgroundClass2 + " rounded-lg font-bold w-40 text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:text-gray-700"}
                to="/thank-you/know-leader">Know Leader</Link>
            </div>
            <Switch>
              <Route exact path="/thank-you" component={NoLeader} />
              <Route exact path="/thank-you/know-leader" component={KnowLeader} />
            </Switch>
        </div>
      </div>
    </div>
    </>
  )
}

export default SwitchCategory