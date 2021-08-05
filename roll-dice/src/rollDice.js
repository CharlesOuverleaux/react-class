import React, { Component } from "react";
import Die from "./die";
import "./rollDice.css";

class RollDice extends Component {
  static defaultProps = {
    dices: ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props){
    super(props);
    this.state = { dice1: "one", dice2: "four", dice3: "six", rolling: false}
    this.roll = this.roll.bind(this);
  };

  roll(){
    const rnd1 = this.props.dices[Math.floor(Math.random() * this.props.dices.length)];
    const rnd2 = this.props.dices[Math.floor(Math.random() * this.props.dices.length)];
    const rnd3 = this.props.dices[Math.floor(Math.random() * this.props.dices.length)];
    this.setState({dice1: rnd1, dice2: rnd2, dice3: rnd3, rolling: true});
    // wait one sec then set again to false
    setTimeout(() => {
      this.setState({rolling: false})
    }, 1000);
  };

  render() {
    const btn =
      <button onClick={this.roll}>
        {this.state.rolling ? "Rolling..." : "Roll the dices!"}
      </button>
    const msg =
            <div>
              <h1>You won!</h1>
              <img alt="win msg" src="https://media.giphy.com/media/jp7jSyjNNz2ansuOS8/giphy.gif" />
            </div>
    let win = this.state.dice1 === this.state.dice2 && this.state.dice2 === this.state.dice3
    return (
      <div className="rollDice">
        <h1>Try your luck 🍀</h1>
        <div Class="Dices">
          <Die n={this.state.dice1} rolling={this.state.rolling} />
          <Die n={this.state.dice2} rolling={this.state.rolling} />
          <Die n={this.state.dice3} rolling={this.state.rolling} />
        </div>
        { win ? msg : btn }
      </div>
    );
  }
}

export default RollDice;
