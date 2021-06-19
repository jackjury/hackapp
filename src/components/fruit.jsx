import React, { Component } from "react";
import Answers from "./answers";
import AppleImage from "../images/fruit/apple.png";
import BananaImage from "../images/fruit/banana.png";
import CherryImage from "../images/fruit/cherry.png";
import StrawberryImage from "../images/fruit/strawberry.png";

class Fruit extends Component {
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
        name: "apple",
        answers: ["apple", "carrot", "dog", "car"],
        image: AppleImage,
      },
      {
        name: "banana",
        answers: ["banana", "spade", "ghost", "ball"],
        image: BananaImage,
      },
      {
        name: "cherry",
        answers: ["cherry", "camera", "oven", "cup"],
        image: CherryImage,
      },
      {
        name: "strawberry",
        answers: ["strawberry", "sausage", "hat", "fox"],
        image: StrawberryImage,
      },
    ],
  };
  render() {
    // console.log(this.state.game[this.state.turn].answers)
    // console.log(this.state.game[this.state.turn].image)

    if (this.state.turn > this.state.game.length) {
      // Render Success
    } else {
      return (
        <>
          <img
            height="200px"
            src={this.state.game[this.state.turn].image}
            alt="apple"
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

export default Fruit;

// if turn = 0 show apple image and answer array
// if turn = 1 show banana image and answer array
// if turn = 2 show cherry image and answer array
// if turn = 3 show strawberry image and answer array

// if user clicks array index 0 , add 1 to turn
