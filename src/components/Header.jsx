import React, { Component } from "react";
import { Link } from "react-router-dom";
import CubClubLogo from "./CubClubLogo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <img className="cub-logo" src={CubClubLogo} alt="Cub Club Logo" />
        <button className="back-button">
          <Link to="/">Home</Link>
        </button>
        {/* <button className="back-button">
          <Link to="/image-game">Game Start</Link>
        </button> */}
      </div>
    );
  }
}

export default Header;
