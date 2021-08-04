import React, { Component } from "react";
import "./die.css"

class Die extends Component {
  render() {
    const fa = `fas fa-dice-${this.props.n} fa-7x`
    return (
      <div className="Die">
        <h1>This is a dice</h1>
        <i class={fa}></i>
      </div>
    );
  }
}

export default Die;
