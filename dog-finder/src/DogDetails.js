import React, { Component } from "react";
import './DogDetails.css';

class DogDetails extends Component {
  render(){
    const dog = this.props.dog;
    return(
      <div className='DogDetails'>
        <h2>My name is {dog.name}</h2>
        <div className='DogContainer'>
          <div className='DogInfo'>
            <div className='img-container'>
              <img alt={dog.name} src={dog.src} />
            </div>
            <h3>Age: {dog.age}</h3>
          </div>
          <div className='DogFacts'>
            <ul>
              {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default DogDetails;
