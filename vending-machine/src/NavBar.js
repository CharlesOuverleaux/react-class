import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render(){
    return(
      <div className='NavBar'>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/bola'>Bola de Berlim</NavLink>
          <NavLink exact to='/bolo'>Bolo Rei</NavLink>
          <NavLink exact to='/nata'>Pastel de Nata</NavLink>
      </div>
    )
  }
}


export default NavBar;
