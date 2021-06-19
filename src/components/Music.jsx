import React, { Component } from 'react';

class Music extends Component {
  state = {};
  render() {
    return (
      <div>
        <embed
          src="KidsMusic.mp3"
          autostart="true"
          loop="true"
          width="2"
          height="0"
        ></embed>
      </div>
    );
  }
}

export default Music;
