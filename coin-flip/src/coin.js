import React, { Component } from "react";
import "./coin.css";

class Coin extends Component {
  render() {
    const head = <img alt="head" src="https://images.unsplash.com/photo-1588866054175-c8347662ec72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
    const tail = <img alt="tail" src="https://images.unsplash.com/photo-1510920018318-3b4dfe979e4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
    return(
      <div className="Coin">
        { this.props.flipResult ? head : tail }
      </div>
    );
  }
}

export default Coin;
