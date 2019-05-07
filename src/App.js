import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import "./assets/styles/main.scss";

import {
  Header,
  Main,
  Footer
} from './Component';

import { Routes } from './Routes';

export function App() {
  return (
    <div className="Wrapper">
      <Router >
        <Header />
        <Main>
          <Routes/>
        </Main>
        <Footer />
      </Router>
    </div>
  )
}
