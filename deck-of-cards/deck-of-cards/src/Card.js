import React, { Component } from "react";
import './Card.css';


class Card extends Component {
  // added to the constructor to avoid other cards to get new transform
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render () {
    return (
      <img className='Card' style={{ transform: this._transform }} alt={this.props.cardInfo.code} src={this.props.cardInfo.image} />
    )
  }
}

export default Card;
