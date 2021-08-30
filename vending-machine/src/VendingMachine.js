import React, { Component } from "react";
import './VendingMachine.css';
import Bola from "./Bola";
import Bolo from "./Bolo";
import Nata from "./Nata";

class VendingMachine extends Component {
  render() {
    return(
      <div className='VendingMachine'>
        <h1>Vending Machine</h1>
        <nav>
          <Bola />
          <Bolo />
          <Nata />
        </nav>
      </div>
    )
  }
}

export default VendingMachine;
