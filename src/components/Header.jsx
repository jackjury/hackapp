import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CubClubLogo from './CubClubLogo.png';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <img className="cub-logo" src={CubClubLogo} alt="Cub Club Logo" />
        <butto className="back-button"><Link to="/">Back Home</Link></butto>
      </div>
    );
  }
}

export default Header;
