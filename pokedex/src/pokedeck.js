import React, { Component } from "react";
import Pokecard from "./pokecard";
import './Pokedeck.css';

class PokeDeck extends Component {
  render() {
    let title = this.props.winner ? "winner" : "loser";
    return(
      <div className="PokeDeck">
        <div className={title}>
          <p>Total: {this.props.score} for {this.props.player}</p>
          <div className="Cards">
            {this.props.hand.map(p =>
              <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PokeDeck;
