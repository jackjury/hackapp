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
        <p>Choose Your Game!</p>
        <div className="gameChoiceContainerFirst">
          <div className="gameChoice">
            <Link to="/image-game/fruit">
              <p>Fruit</p>
              <img height="200px" src={AppleImage} alt="" />
            </Link>
          </div>
          <div className="gameChoice">
            <Link to="/image-game/colours">
              <p>Colours</p>
              <img height="200px" src={BlueImage} alt="" />
            </Link>
          </div>
        </div>
        <div className="gameChoiceContainerSecond">
          <div className="gameChoice">
            <Link to="/image-game/animals">
              <p>Animals</p>
              <img height="200px" src={PandaImage} alt="" />
            </Link>
          </div>
          <div className="gameChoice">
            <Link to="/image-game/weather">
              <p>Weather</p>
              <img height="200px" src={CloudImage} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGameHomePage;
