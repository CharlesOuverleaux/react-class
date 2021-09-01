import React, { Component } from "react";
import './DogList.css';

class DogList extends Component {
  render(){
    const dogs = this.props.dogs.map(dog =>
        <div key={dog.name} className="DogList-Dog">
          <h2>{dog.name}</h2>
          <div className='img-container'>
            <a href={`/Dogs/${dog.name}`}>
              <img alt={dog.name} src={dog.src}/>
            </a>
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
