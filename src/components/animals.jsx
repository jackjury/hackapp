import React, { Component } from 'react';
import Answers from './answers';
import DogImage from '../images/animal/dog.png';
import CatImage from '../images/animal/cat.png';
import LionImage from '../images/animal/lion.png';
import PenguinImage from '../images/animal/penguin.png';

import SuccessPage from './successPage';

class Fruit extends Component {
  try = (boolean) => {
    if (boolean) {
      this.increaseTurn();
    } else {
      alert('Wrong!');
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
    game: [
      {
        name: 'dog',
        answers: ['dog', 'frog', 'table', 'lamp'],
        image: DogImage,
      },
      {
        name: 'cat',
        answers: ['cat', 'bear', 'cow', 'mouse'],
        image: CatImage,
      },
      {
        name: 'lion',
        answers: ['lion', 'egg', 'apple', 'hat'],
        image: LionImage,
      },
      {
        name: 'penguin',
        answers: ['penguin', 'sun', 'spoon', 'lobster'],
        image: PenguinImage,
      },
    ],
  };
  render() {
    if (this.state.turn + 1 > this.state.game.length) {
      // Render Success

      return <SuccessPage />;
    } else {
      return (
        <div className="question-box">
          <img
            height="200px"
            src={this.state.game[this.state.turn].image}
            alt="apple"
          />

          <Answers
            try={this.try}
            answer={this.state.game[this.state.turn].answers}
          />
        </div>
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
