import React, { Component } from "react";
import './Joke.css';

class Joke extends Component {
  render(){
    return(
      <div className='Joke'>
        <img alt={this.props.text} src={this.props.img_src} />
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Joke;
