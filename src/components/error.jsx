import React, { Component } from 'react';
import lion from './lion.png';
import { Link } from 'react-router-dom';

class Error extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={lion} alt="Logo" />
        <h1>Oh no! You've gone off the path. Let's go back home.</h1>
        <Link to="/"> Home </Link>
      </div>
    );
  }
}

export default Error;
