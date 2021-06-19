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
        <button className="welcome-button">
          <Link to="/image-game">Lets Start!</Link>
        </button>
        <p className="copyright">Copyright Lions Inc. 2021</p>
      </div>
    );
  }
}

export default WelcomeScreen;
