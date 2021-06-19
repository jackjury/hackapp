import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cubClub from './CubClub.png';

class WelcomeScreen extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <h1 className="typewriter">Welcome to</h1> */}
        <img src={cubClub} alt="Welcome" />
        <button className="welcome-button">
          <Link to="/image-game">Lets Start!</Link>
        </button>
      </div>
    );
  }
}

export default WelcomeScreen;
