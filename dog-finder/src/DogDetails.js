import React, { Component } from "react";
import './DogDetails.css';
import { Link } from 'react-router-dom';

class DogDetails extends Component {
  render(){
    let { dog } = this.props;
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
              {dog.facts.map((fact,i) => <li key={i} >{fact}</li>)}
            </ul>
          </div>
        </div>
        <Link to='/Dogs' className="btn btn-info">Go Back</Link>
      </div>
    )
  }
}


export default DogDetails;
