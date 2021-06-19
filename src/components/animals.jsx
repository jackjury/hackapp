import React, { Component } from "react";
import Answers from "./answers";
import Game from '../animals.json';
import SuccessPage from "./successPage";

class Fruit extends Component {
  try = (boolean) => {
    if (boolean) {
      this.increaseTurn();
    } else {
      alert('Uh-oh! Try again');
    }
  };

  increaseTurn = () => {
    console.log('button press');
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
						height='200px'
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

export default Fruit;

// if turn = 0 show apple image and answer array
// if turn = 1 show banana image and answer array
// if turn = 2 show cherry image and answer array
// if turn = 3 show strawberry image and answer array

// if user clicks array index 0 , add 1 to turn
