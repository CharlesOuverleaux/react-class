import React, { Component } from "react";
import './Joke.css';

class Joke extends Component {
  render(){
    return(
      <div className='Joke'>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
        <p>20 votes</p>
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Joke;
