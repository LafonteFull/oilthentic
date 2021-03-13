import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { KnowLeader, NoLeader } from "../components";

const SignUp = () => {
  const { pathname } = useLocation()
  const backgroundClass1 = pathname === '/sign-up' ? 'bg-black text-white' : 'bg-gray-200 text-black'
  const backgroundClass2 = pathname === '/sign-up' ? 'bg-gray-200 text-black' : 'bg-black text-white'
  return (
    <div className="text-gray-900 flex flex-col w-full h-full justify-center items-center p-10">
      <div className="flex justify-center mt-20">
          <Link className={backgroundClass1 + " rounded-lg  w-40 font-sans text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:bg-gray-400 mr-6"}
          to="/sign-up">No Leader</Link>
          <Link className={backgroundClass2 + " rounded-lg w-40 font-sans text-sm text-center px-4 py-4 transition duration-300 ease-in-out hover:bg-gray-400"}
          to="/sign-up/know-leader">Know Leader</Link>
      </div>
      <Switch>
        <Route exact path="/sign-up" component={NoLeader} />
        <Route exact path="/sign-up/know-leader" component={KnowLeader} />
      </Switch>
    </div>
  )
}

export default SignUp