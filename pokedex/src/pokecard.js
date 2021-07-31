import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const idConverter = (id) => {
  const num_lenght = id.toString().length;
  if (num_lenght === 1) {
    return `00` + id;
  } else if (num_lenght === 2){
    return `0` + id;
  } else {
    return id;
  }
}

class Pokecard extends Component {
  render() {
    const id = this.props.id;
    return (
      <div className="PokeCard">
        <h2>{this.props.name}</h2>
        <img alt="pokemon" src={`${POKE_API}${idConverter(id)}.png`} />
        <ul className="PokeProps">
          <li>Type: {this.props.type}</li>
          <li>Exp: {this.props.exp}</li>
        </ul>
      </div>
    )
  }
}

export default Pokecard;
