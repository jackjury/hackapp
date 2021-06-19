import React, { Component } from "react";
import Answers from "./answers";
import CloudImage from "../images/weather/cloud.png";
import LightningImage from "../images/weather/lightning.png";
import RainImage from "../images/weather/rain.png";
import RainbowImage from "../images/weather/rainbow.png";
import SuccessPage from "./successPage";

class Weather extends Component {
  try = (boolean) => {
    if (boolean) {
      this.increaseTurn();
    } else {
      alert("Wrong!");
    }
  };

  increaseTurn = () => {
    console.log("button press");
    console.log(this.state.turn);
    console.log(this.state.game.length);

    this.setState({ turn: this.state.turn + 1 });
  };

  state = {
    turn: 0,
    game: [
      {
        name: "cloud",
        answers: ["cloud", "car", "country", "wall"],
        image: CloudImage,
      },
      {
        name: "lightning",
        answers: ["lightning", "phone", "map", "bike"],
        image: LightningImage,
      },
      {
        name: "rain",
        answers: ["rain", "cheese", "bath", "teapot"],
        image: RainImage,
      },
      {
        name: "rainbow",
        answers: ["rainbow", "plate", "computer", "music"],
        image: RainbowImage,
      },
    ],
  };
  render() {
    if (this.state.turn + 1 > this.state.game.length) {
      // Render Success

      return <SuccessPage />;
    } else {
      return (
        <>
          <img
            height="200px"
            src={this.state.game[this.state.turn].image}
            alt="cloud"
          />

          <Answers
            try={this.try}
            answer={this.state.game[this.state.turn].answers}
          />
        </>
      );
    }
  }
}

export default Weather;

// if turn = 0 show apple image and answer array
// if turn = 1 show banana image and answer array
// if turn = 2 show cherry image and answer array
// if turn = 3 show strawberry image and answer array

// if user clicks array index 0 , add 1 to turn
