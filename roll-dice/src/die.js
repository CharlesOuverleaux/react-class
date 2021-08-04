import React, { Component } from "react";
import "./die.css"

class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i class={`fas fa-dice-${this.props.n} fa-7x ${this.props.rolling ? "shaking" : ""}`}></i>
      </div>
    );
  }
}

export default Die;
