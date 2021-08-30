import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nata extends Component {
  render(){
    return(
      <div className='Nata'>
        <h2>Pastel de Nata</h2>
        <img alt='Nata' src='https://images.unsplash.com/photo-1618250713296-ee011768e525?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'/>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Nata;
