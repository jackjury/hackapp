import React, { Component } from "react";
import { Link } from "react-router-dom";

class ImageGameHomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Image Game Home Page!</p>
        <Link to="/">Back to Welcome Screen</Link>
      </div>
    );
  }
}

export default ImageGameHomePage;
