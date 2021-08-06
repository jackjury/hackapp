import React, { Component } from "react";
import { Link } from "react-router-dom";
import cubClub from "./CubClub.png";

class WelcomeScreen extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <h1 className="typewriter">Welcome to</h1> */}
        <img className="bigWelcomeImage" src={cubClub} alt="Welcome" />
        <Link to="/image-game">
          <button className="welcome-button">Lets Start!</button>
        </Link>
      </div>
    );
  }
}

export default WelcomeScreen;
