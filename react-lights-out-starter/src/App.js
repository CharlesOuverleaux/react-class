import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
      <h1>Lights Out</h1>
        <Board />
      </div>
    );
  }
}

export default App;
