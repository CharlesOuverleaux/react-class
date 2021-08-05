import React, { Component } from "react";
import Ball from "./ball";
import "./lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  }
  constructor(props){
    super(props);
    this.state = {nums: Array.from({length: this.props.maxBalls})};
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  handleClick(){
    this.generate();
  }

  render() {
    return(
      <div className="Lottery">
        <h1>{this.props.title}</h1>
          <div className="BallsPlacement">
            {this.state.nums.map(n => <Ball n={n} />)}
          </div>
          <button onClick={this.handleClick}>Generate new numbers</button>
      </div>
    )
  }
}

export default Lottery;
