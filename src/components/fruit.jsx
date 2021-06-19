import React, { Component } from "react";
import Answers from "./Answers";

class Fruit extends Component {
  state = {
    turn: 0,
    game: [
      {
        name: "apple",
        answers: ["apple", "carrot", "dog", "car"],
      },
      {
        name: "banana",
        answers: ["banana", "spade", "ghost", "ball"],
      },
      {
        name: "cherry",
        answers: ["cherry", "camera", "oven", "cup"],
      },
      {
        name: "strawberry",
        answers: ["strawberry", "sausage", "hat", "fox"],
      },
    ],
  };
  render() {
    return (
      <>
        <img src="../images/fruit/apple.png" alt="apple" />
        <Answers answers={["apple", "carrot", "dog", "car"]} />
      </>
    );
  }
}

export default Fruit;
