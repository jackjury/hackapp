import React, { Component } from "react";
import axios from "axios";

class Sound extends Component {
  state = {};
  render() {
    return <h1>Hello</h1>;
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    this.setState({ apiData: response.data });
    console.log(this.state.data);
  }
}

export default Sound;
