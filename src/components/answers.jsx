import React, { Component } from "react";
//import {Draggable } from "gsap/all";
//import Draggable from "gsap/Draggable";

//one prop for name
//and one prop boolean

class AnswerButtons extends Component {
  render() {
    return (
      <div className="buttonContainer">
        <button type="button" class="btn btn-primary">
          {this.props.answer[0]}
        </button>
        <button type="button" class="btn btn-secondary">
          {this.props.answer[1]}
        </button>
        <button type="button" class="btn btn-info">
          {this.props.answer[2]}
        </button>
        <button type="button" class="btn btn-light">
          {this.props.answer[3]}
        </button>
      </div>
    );
  }
}
export default AnswerButtons;
