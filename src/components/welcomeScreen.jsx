import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cubClub from './CubClub.png';


class WelcomeScreen extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={cubClub} alt="Welcome" />
        <Link to="/image-game">Image Game</Link>
      </div>
    );
  }
}

export default WelcomeScreen;
