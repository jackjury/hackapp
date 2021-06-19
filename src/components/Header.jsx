import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Header!</h1>
        <p>Cub Club Logo</p>
        <Link to="/">Back to Welcome Screen</Link>
      </div>
    );
  }
}

export default Header;
