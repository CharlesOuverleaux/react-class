import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render(){
    return(
      <div className='NavBar'>
        <NavLink activeClassName='NavBar-active' exact to='/'>Home</NavLink>
        <NavLink activeClassName='NavBar-active' exact to='/bola'>Bola de Berlim</NavLink>
        <NavLink activeClassName='NavBar-active' exact to='/bolo'>Bolo Rei</NavLink>
        <NavLink activeClassName='NavBar-active' exact to='/nata'>Pastel de Nata</NavLink>
      </div>
    )
  }
}


export default NavBar;
