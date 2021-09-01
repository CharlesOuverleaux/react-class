import React, { Component } from "react";
import './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return(
      <div className='NavBar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/Dogs">MyNextDoggo</a>
          <ul className="navbar-nav mr-auto">
            {this.props.dogs.map(dog =>
              <li className="nav-item active" key={dog.name}>
                <NavLink className="nav-link" to={`/Dogs/${dog.name}`}>{dog.name}</NavLink>
              </li>
            )}
          </ul>


        </nav>
      </div>
    )
  }
}

export default NavBar;
