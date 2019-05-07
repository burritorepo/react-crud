import React from "react";
import { Route, Switch } from "react-router-dom";

import { GetUser } from '../Container/GetUser';
import { DetailUser } from '../Container/DetailUser';
import { EditUser } from '../Container/EditUser';

function Routes(prop) {
  const { match: { path } } = prop;

  return (
    <Switch>
      <Route path={`${path}/edit/:id`} component={EditUser} />
      <Route path={`${path}/:id`} component={DetailUser} />
      <Route exact path={path} component={GetUser} />
    </Switch>
  )
}

export {
  Routes
}
