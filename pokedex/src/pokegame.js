import React, { Component } from 'react';
import pokemons from './pokemons';
import Pokecard from './pokecard';

function getRandom(array, n) {
  return array.sort(() => Math.random() - Math.random()).slice(0, n)
};

class PokeGame extends Component {
  render() {
    const handOne = getRandom(pokemons, 4);
    const handTwo = getRandom(pokemons, 4);
    return (
      <div className="PokeGame">
        <h2>Sacha's hand</h2>
        <p>Total: </p>
        <div className="Cards">
          {handOne.map(p =>
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience} />
          )}
        </div>
        <h2>Juju's hand</h2>
        <p>Total: </p>
        <div className="Cards">
          {handTwo.map(p =>
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience} />
          )}
        </div>
      </div>
    )
  }
}

export default PokeGame;
