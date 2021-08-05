import React, { Component } from "react";
import Coin from './coin';
import './flip.css';

class Flip extends Component {
  constructor(props){
    super(props);
    this.state = { flip: true }
    this.handleClick = this.handleClick.bind(this)
  }
  getrndflip(){
    const arr = [true, false]
    this.setState({ flip: arr[(Math.floor(Math.random() * 2))] })
  }

  handleClick(){
    this.getrndflip();
  }
  render() {
    return(
      <div className="Flip">
        <Coin flipResult={this.state.flip} />
        <button onClick={this.handleClick}>Flip me!</button>
      </div>
    )
  }
}

export default Flip;
