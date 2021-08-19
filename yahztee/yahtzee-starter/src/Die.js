import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        // we pass the whole event, but here we only want the handleClick
        // we can do this w. an arrow function, onClick={() => this.props.handleClick(this.props.idx)}
        // but that's not optimal for perf, so we do a new function
        // whenever we do a function we need to bind this, otherwise this is undefeined
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
