import React, { Component } from 'react';
import Answers from './answers';
import BlueImage from '../images/colours/blue.png';
import RedImage from '../images/colours/red.png';
import GreenImage from '../images/colours/green.png';
import OrangeImage from '../images/colours/orange.png';
import SuccessPage from './successPage';

class Colours extends Component {
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
        name: 'blue',
        answers: ['blue', 'orange', 'red', 'pink'],
        image: BlueImage,
      },
      {
        name: 'green',
        answers: ['green', 'white', 'black', 'blue'],
        image: GreenImage,
      },
      {
        name: 'orange',
        answers: ['orange', 'yellow', 'brown', 'red'],
        image: OrangeImage,
      },
      {
        name: 'red',
        answers: ['red', 'brown', 'purple', 'grey'],
        image: RedImage,
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

export default Colours;
