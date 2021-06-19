import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CubClub from './CubClub.png';

class WelcomeScreen extends Component {
  state = {};
  render() {
    return (
      <div>
        <image src={CubClub} alt="Welcome" />
        <Link to="/image-game">Image Game</Link>
      </div>
    );
  }
}

export default WelcomeScreen;
