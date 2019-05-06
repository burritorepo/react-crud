import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import "./assets/styles/main.scss";

import {
  Header,
  Main,
  Footer
} from './components';

import {
  PageUsers,
  PageCreateUser,
  PageDetailUser,
  PageEditUser
} from './pages';

export function App() {
  return (
    <div className="Wrapper">
      <Router >
        <Header />
        <Main>
          <Switch>
            <Route exact path="/users" component={PageUsers} />
            <Route exact path="/users/:id" component={PageDetailUser} />
            <Route path="/users/edit/:id" component={PageEditUser} />
            <Route path="/create" component={PageCreateUser} />
            <Redirect exact from="/" to="/users" />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  )
}
