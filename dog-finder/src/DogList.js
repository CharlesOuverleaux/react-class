import React, { Component } from "react";
import './DogList.css';
import DogDetails from "./DogDetails";

class DogList extends Component {
  render(){
    return(
      <div className='DogList'>
      <h1>I'm a DogList</h1>
      <DogDetails />
      </div>
    )
  }
}

export default DogList;
