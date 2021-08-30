import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Bolo extends Component {
  render() {
    return (
      <div className='Bolo'>
        <h2>Bolo Rei</h2>
        <img alt='Bolo' src='https://www.saborbrasil.it/wp-content/uploads/2021/06/Bolo-Rei-1.jpg' />
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Bolo;
