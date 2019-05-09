import React, { Component } from "react";

import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer has-background-warning">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Footer
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export {
  Footer
}
