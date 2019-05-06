import React, { Component } from "react";

import './main.scss';

export class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
          {this.props.children}
        </div>
      </main>
    );
  }
}
