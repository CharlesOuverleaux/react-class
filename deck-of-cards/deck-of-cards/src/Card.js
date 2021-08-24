import React, { Component } from "react";
import './Card.css';


class Card extends Component {

  render () {
    return (
      <div className='Card'>
        <img alt={this.props.cardInfo.code} src={this.props.cardInfo.images.svg} />
      </div>
    )
  }
}

export default Card;
