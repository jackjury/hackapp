import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppleImage from "../images/fruit/apple.png";
import BlueImage from "../images/colours/blue.png";
import PandaImage from "../images/animal/panda.png";
import CloudImage from "../images/weather/cloud.png";

class ImageGameHomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="game-header">Choose Your Game!</h1>
        <div className="gameChoiceContainerFirst">
          <div className="gameChoice">
            <Link to="/image-game/fruit">
              <p className="game-titles">Fruit</p>
              <img height="200px" src={AppleImage} alt="" />
            </Link>
          </div>
          <div className="gameChoice">
            <Link to="/image-game/colours">
              <p className="game-titles">Colours</p>
              <img height="200px" src={BlueImage} alt="" />
            </Link>
          </div>
        </div>
        <div className="gameChoiceContainerSecond">
          <div className="gameChoice">
            <Link to="/image-game/animals">
              <p className="game-titles">Animals</p>
              <img height="200px" src={PandaImage} alt="" />
            </Link>
          </div>
          <div className="gameChoice">
            <Link to="/image-game/weather">
              <p className="game-titles">Weather</p>
              <img height="200px" src={CloudImage} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGameHomePage;
