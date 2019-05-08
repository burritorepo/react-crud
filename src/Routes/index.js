import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import {
  PageGetUser,
  PageCreateUser
} from '../Page';

function Routes() {
  return (
    <Switch>
      <Route path="/users" component={PageGetUser} />
      <Route path="/create" component={PageCreateUser} />
      <Redirect exact from="/" to="/users" />
    </Switch>
  )
}

export {
  Routes
}
