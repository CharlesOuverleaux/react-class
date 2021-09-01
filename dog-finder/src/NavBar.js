import React, { Component } from "react";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <div className='NavBar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/Dogs">MyNextDoggo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav mr-auto">
            {this.props.dogs.map(dog =>
              <li class="nav-item active">
                <a class="nav-link" href={`/Dogs/${dog.name}`}>{dog.name}</a>
              </li>
            )}
          </ul>


        </nav>
      </div>
    )
  }
}

export default NavBar;
