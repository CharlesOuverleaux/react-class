import React, { Component } from "react";
import "./ball.css"

class Ball extends Component {
  render() {
    return(
      <div className="Ball">
        <p>{this.props.n}</p>
      </div>
    )
  }
}

export default Ball;
