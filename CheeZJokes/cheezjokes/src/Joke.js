import React, { Component } from "react";
import './Joke.css';

class Joke extends Component {
  render(){
    return(
      <div className='Joke'>
        <i className="fa fa-arrow-up" onClick={this.props.upVote}></i>
        <span>{this.props.votes} votes</span>
        <i className="fa fa-arrow-down" onClick={this.props.downVote}></i>
        <span>{this.props.text}</span>
      </div>
    )
  }
}

export default Joke;
