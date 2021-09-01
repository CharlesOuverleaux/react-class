import React, { Component } from "react";
import './DogList.css';
import { Link } from 'react-router-dom';

class DogList extends Component {
  render(){
    const dogs = this.props.dogs.map(dog =>
        <div key={dog.name} className="DogList-Dog">
          <h2>{dog.name}</h2>
          <div className='img-container'>
            <img alt={dog.name} src={dog.src}/>
          </div>
        </div>
      )
    return(
      <div className='DogList'>
        <h1>Available dogs</h1>
        <div className='DogList-Dogs'>
          {dogs}
        </div>
      </div>
    )
  }
}

export default DogList;
