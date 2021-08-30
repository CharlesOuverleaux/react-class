import React, { Component } from "react";
import './Joke.css';

class Joke extends Component {
  render(){
    return(
      <div className='Joke'>
        <div className='Votes'>
          <i className="Arrow-up fa fa-arrow-up" onClick={this.props.upVote}></i>
          <span>{this.props.votes} votes</span>
          <i className="Arrow-down fa fa-arrow-down" onClick={this.props.downVote}></i>
        </div>
        <div className="Spacer"></div>
        <span className="Joke-text">{this.props.text}</span>
      </div>
    )
  }
}

export default Joke;
