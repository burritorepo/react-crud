import React, { Component } from "react";

import './main.scss';

class Main extends Component {
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

export {
  Main
}
