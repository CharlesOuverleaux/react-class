import React, { Component } from "react";
import Die from "./die";

class RollDice extends Component {
  render() {
    return (
      <div className="rollDice">
        <h1>Welcome to a Dice roll</h1>
        <Die n="four" />
      </div>
    );
  }
}

export default RollDice;
