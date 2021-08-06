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
      <div className="imageGameHomePage">
        <h1 className="game-header">Choose Your Game!</h1>
        <div className="gameChoiceContainerFirst">
          <Link to="/image-game/fruit">
            <div className="gameChoice">
              <p className="game-titles">Fruit</p>
              <img height="200px" src={AppleImage} alt="" />
            </div>
          </Link>
          <Link to="/image-game/colours">
            <div className="gameChoice">
              <p className="game-titles">Colours</p>
              <img height="200px" src={BlueImage} alt="" />
            </div>
          </Link>
        </div>
        <div className="gameChoiceContainerSecond">
          <Link to="/image-game/animals">
            <div className="gameChoice">
              <p className="game-titles">Animals</p>
              <img height="200px" src={PandaImage} alt="" />
            </div>
          </Link>
          <Link to="/image-game/weather">
            <div className="gameChoice">
              <p className="game-titles">Weather</p>
              <img height="200px" src={CloudImage} alt="" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ImageGameHomePage;
