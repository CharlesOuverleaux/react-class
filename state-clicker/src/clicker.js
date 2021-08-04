import React, { Component } from "react";
import "./clicker.css"

class Clicker extends Component {
  constructor(props){
    super(props);
    this.state = { count: 0};
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick () {
    let rand = Math.floor(Math.random() * 10);
    this.setState({ count: rand});
  };
  render () {
    const btn = <button onClick={this.handleClick}>Click here for a new number</button>;
    const winMsg = <h2>You won!</h2>
    let win = this.state.count === 7;
    return (
      <div className="Clicker">
        <h1>Your number is: {this.state.count}</h1>
        { win ? winMsg : btn }
      </div>
    );
  }
}

export default Clicker;
