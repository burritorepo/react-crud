import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import {
  PageUser,
  PageCreateUser
} from '../Page';

function Routes() {
  return (
    <Switch>
      <Route path="/users" component={PageUser} />
      <Route path="/create" component={PageCreateUser} />
      <Redirect exact from="/" to="/users" />
    </Switch>
  )
}

export {
  Routes
}
