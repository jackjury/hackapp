import React, { Component } from "react";
import { Link } from "react-router-dom";
import CubClubLogo from "./CubClubLogo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <img className="cub-logo" src={CubClubLogo} alt="Cub Club Logo" />
        <Link to="/">
          <button className="back-button">Home</button>
        </Link>
      </div>
    );
  }
}

export default Header;
