import React, { Component } from "react";
import AppleImage from "../images/fruit/apple.png";
import BlueImage from "../images/colours/blue.png";
import PandaImage from "../images/animal/panda.png";
import CloudImage from "../images/weather/cloud.png";

class ImageGameHomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Image Game Home Page!</p>
        <hr />
        <div className="gameChoiceContainer">
          <div className="fruitGameChoice">
            <p>Fruit</p>
            <img height="200px" src={AppleImage} alt="" />
          </div>
          <hr />
          <div className="colourGameChoice">
            <p>Colours</p>
            <img height="200px" src={BlueImage} alt="" />
          </div>
          <hr />
          <div className="animalGameChoice">
            <p>Animals</p>
            <img height="200px" src={PandaImage} alt="" />
          </div>
          <hr />
          <div className="weatherGameChoice">
            <p>Weather</p>
            <img height="200px" src={CloudImage} alt="" />
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default ImageGameHomePage;
