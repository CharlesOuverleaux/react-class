import React, { Component } from 'react';
import pokemons from './pokemons';
import PokeDeck from './pokedeck';

const getRandom = (array, n) => {
  return array.sort(() => Math.random() - Math.random()).slice(0, n)
};

const getTotalExp = (array) => {
  let sum = 0;
  array.forEach(element => {
    sum += element.base_experience;
  });
  return sum;
}

class PokeGame extends Component {
  render() {
    const handOne = getRandom(pokemons, 4);
    const handTwo = getRandom(pokemons, 4);
    const totalHandOne = getTotalExp(handOne);
    const totalHandTwo = getTotalExp(handTwo);
    const winnerOne = totalHandOne > totalHandTwo;
    const winnerTwo = totalHandOne < totalHandTwo;
    return (
      <div className="PokeGame">
        <h2>{winnerOne ? "Sacha won" : "Flora won"}</h2>
        <PokeDeck hand={handOne} player="Sacha" score={totalHandOne} winner={winnerOne}/>
        <PokeDeck hand={handTwo} player="Flora" score={totalHandTwo} winner={winnerTwo}/>
      </div>
    )
  }
}

export default PokeGame;
