import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import {
  Header,
  Main,
  Footer
} from './components'

import {
  PageUser
} from './container/User';

import { store } from './store';

function App() {
  return (
    <div className="Wrapper">
      <Provider store={store}>
        <Router >
          <Header />
          <Main>
            <Switch>
              <Route path="/users" component={PageUser} />
              <Route path="/create" component={PageUser} />
              <Redirect exact from="/" to="/users" />
            </Switch>
          </Main>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export {
  App
}

