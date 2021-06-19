import React, { Component } from "react";
import lion from "./lion.png";
import { Link } from "react-router-dom";

class Error extends Component {
  state = {};
  render() {
    return (
      <div>
        <img className="bigWelcomeImage" src={lion} alt="Lion" />
        <h1>Oh no! You've gone off the path. Let's go back home.</h1>
        <button>
          <Link to="/"> Home </Link>
        </button>
      </div>
    );
  }
}

export default Error;
