import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import './header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar is-warning">
          <div className="navbar-brand">
            <NavLink to="/" activeClassName="is-active"> 
              Logo
            </NavLink>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <NavLink className="navbar-item" to="/users"
              activeClassName="is-active">
                Usuarios
              </NavLink>
              <NavLink className="navbar-item" to="/create"
              activeClassName="is-active">
                Crear
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export {
  Header
}
