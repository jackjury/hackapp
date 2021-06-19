import React, { Component } from "react";

class Img extends Component {
  state = {};
  render() {
    return <img src={this.props.url} alt={this.props.name} />;
  }
}

export default Img;
