import React, { Component } from "react";
import "./clicker.css"

class Clicker extends Component {
  constructor(props){
    super(props);
    this.state = { count: 0};
  };
  render () {
    return (
      <div className="Clicker">
        <h1>Your number is: {this.state.count}</h1>
      </div>
    );
  }
}

export default Clicker;
