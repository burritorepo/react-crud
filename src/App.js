import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'

import "./assets/styles/main.scss";

import {
  Header,
  Main,
  Footer
} from './Component';

import { store } from './Store';
import { Routes } from './Routes';

export function App() {
  return (
    <div className="Wrapper">
      <Provider store={store}>
        <Router >
          <Header />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}
