import React, { Component } from "react";
import lion from "./lion.png";
import { Link } from "react-router-dom";

class Error extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={lion} alt="Lion" />
        <h1 className="error-text">Oh no! You've gone off the path. Let's go back home.</h1>
        <button className="error-button"><Link to="/"> Home </Link></button>
      </div>
    );
  }
}

export default Error;
