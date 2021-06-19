import React, { Component } from "react";
//import {Draggable } from "gsap/all";
//import Draggable from "gsap/Draggable";

//one prop for name
//and one prop boolean

class AnswerButtons extends Component {
  render() {
    let arr = [];
    this.props.answer.forEach((answer, index) => {
      if (index === 0) {
        let output = [answer, true];
        arr.push(output);
      } else {
        let output = [answer, false];
        arr.push(output);
      }
    });
    arr = shuffle(arr);
    console.log(arr);

    return (
      <div className="container">
        {arr.map((item) => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => this.props.try(item[1])}
            >
              {item[0]}
            </button>
          );
        })}
      </div>
    );
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default AnswerButtons;
