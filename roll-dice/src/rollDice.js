import React, { Component } from "react";
import Die from "./die";
import "./rollDice.css";

class RollDice extends Component {
  static defaultProps = {
    dices: ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props){
    super(props);
    this.state = { n: "one"}
    this.roll = this.roll.bind(this);
  };

  roll(){
    const rnd = this.props.dices[Math.floor(Math.random() * this.props.dices.length)];
    this.setState({n: rnd});
  };

  render() {
    return (
      <div className="rollDice">
        <h1>Try your luck 🍀</h1>
        <div Class="Dices">
          <Die n={this.state.n} />
          <Die n={this.state.n} />
          <Die n={this.state.n} />
        </div>
        <button onClick={this.roll}>Roll the dices!</button>
      </div>
    );
  }
}

export default RollDice;
