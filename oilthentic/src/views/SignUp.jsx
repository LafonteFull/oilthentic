import React from "react";
import { Route, Switch } from "react-router-dom";
import { KnowLeader, NoLeader, SwitchCategory } from "../components";

const SignUp = () => {
  return (
    <div className="text-gray-900 flex flex-col w-full h-full justify-center items-center p-10">
      <SwitchCategory />
      <Switch>
        <Route exact path="/sign-up" component={NoLeader} />
        <Route exact path="/sign-up/know-leader" component={KnowLeader} />
      </Switch>
    </div>
  )
}

export default SignUp