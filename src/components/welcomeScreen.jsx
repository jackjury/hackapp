import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeScreen extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>HomePage!</p>
        <Link to="/image-game">Image Game</Link>
      </div>
    );
  }
}

export default WelcomeScreen;
