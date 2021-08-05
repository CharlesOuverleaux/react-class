import React, { Component } from "react";
import Coin from './coin';
import './flip.css';

class Flip extends Component {
  constructor(props){
    super(props);
    this.state = { flip: true, counter: 0, heads: 0, tails: 0}
    this.handleClick = this.handleClick.bind(this)
  }
  getrndflip(){
    const arr = [true, false]
    const choice = arr[(Math.floor(Math.random() * 2))]
    this.setState(st => {
      return {
        flip: choice,
        counter: st.counter + 1,
        heads: st.heads + (choice ? 1 : 0),
        tails: st.tails + (choice ? 0 : 1)
      }
    })
  }

  handleClick(){
    this.getrndflip();
  }
  render() {
    return(
      <div className="Flip">
        <Coin flipResult={this.state.flip} />
        <button onClick={this.handleClick}>Flip me!</button>
        <p>Played {this.state.counter} times. Heads: {this.state.heads} vs Tails: {this.state.tails}</p>
      </div>
    )
  }
}

export default Flip;
