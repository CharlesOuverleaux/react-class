import React from "react";
import './VendingMachine.css';
import Message from "./Message";

function VendingMachine() {
    return(
      <div className='VendingMachine'>
        <h1>Vending Machine</h1>
        <Message>
          <h2>Click on what you would like to eat</h2>
        </Message>
      </div>
    )
  }

export default VendingMachine;
