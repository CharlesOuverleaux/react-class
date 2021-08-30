import React, { Component } from "react";
import './Dog.css';

class Dog extends Component {
  render () {
    return(
      <div className='Dog'>
        <h1>I'm a dog, my name is: {this.props.name}</h1>
        <img alt="Dog" src="https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format" />
      </div>
    )
  }
}

export default Dog;
