import React, { Component } from "react";
import Coin from './coin';
import './flip.css';

class Flip extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc:"https://images.unsplash.com/photo-1588866054175-c8347662ec72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"},
      { side: "tails", imgSrc: "https://images.unsplash.com/photo-1510920018318-3b4dfe979e4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"}
    ]
  }
  constructor(props){
    super(props);
    this.state = { currCoin: null, flip: true, counter: 0, heads: 0, tails: 0}
    this.handleClick = this.handleClick.bind(this)
  }
  getrndflip(){
    const newCoin = this.props.coins[(Math.floor(Math.random() * 2))]
    this.setState(st => {
      return {
        currCoin: newCoin,
        counter: st.counter + 1,
        heads: st.heads + (newCoin.side === "heads" ? 1 : 0),
        tails: st.tails + (newCoin.side === "tails" ? 1 : 0)
      }
    })
  }

  handleClick(){
    this.getrndflip();
  }
  render() {
    return(
      <div className="Flip">
        {this.state.currCoin && <Coin info={this.state.currCoin}/>}
        <button onClick={this.handleClick}>Flip me!</button>
        <p>Played {this.state.counter} times. Heads: {this.state.heads} vs Tails: {this.state.tails}</p>
      </div>
    )
  }
}

export default Flip;
