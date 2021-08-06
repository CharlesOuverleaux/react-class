import React, { Component } from "react";
import "./box.css";
import { choice } from "./helper";

class Box extends Component {
  static defaultProps = {
    colors: ['#5aa9e6ff', '#7fc8f8ff', '#f9f9f9ff', '#ffe45eff', '#ff6392ff']
  }
  constructor(props) {
    super(props)
    this.state = {
      color: '#5aa9e6ff'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getRndColor(){
    let newColor;
    // we do a while loop to avoid having twice the same color
    do {
        newColor = choice(this.props.colors);
    } while (newColor === this.state.color)
    // if the new color is different we set the state
    this.setState(curState => ({
      color: newColor
    }))
  }

  handleClick(){
    return this.getRndColor();
  }
  render(){
    return(
      <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
      </div>
    )
  }
}

export default Box;
