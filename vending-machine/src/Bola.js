import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Bola extends Component {
  render() {
    return (
      <div className='Bola'>
        <h2>Bola de Berlin</h2>
        <img alt='Bola' src='https://leitariadaquintadopaco.com/wp-content/uploads/2019/06/bola_berlim_limao.jpg' />
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Bola;
