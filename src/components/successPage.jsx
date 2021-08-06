import React, { Component } from "react";
import { Link } from "react-router-dom";

class SuccessPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="successText">
          <h1>WOW!</h1>
          <h1>You Did it!</h1>
          <h1>Great Job!</h1>
        </div>

        <Link to="/image-game">
          <button className="welcome-button">Try another one!</button>
        </Link>
      </div>
    );
  }
}

export default SuccessPage;
