import React, { Component } from "react";
import Answers from "./answers";
import SuccessPage from "./successPage";
import Game from '../colours.json'

class Colours extends Component {
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
    game: Game
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
            alt={this.state.game.name}
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

export default Colours;
