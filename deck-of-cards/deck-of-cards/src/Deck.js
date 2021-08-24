import React, { Component } from "react";
import './Deck.css';
import Card from "./Card";
import axios from 'axios';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/'

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {deck_id: null, cards:[]}
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount(){
    let deck = await axios.get(API_BASE_URL + 'new/shuffle/');
    this.setState({deck_id: deck.data.deck_id})
  }
  async getCard(){
    let deck_id =  this.state.deck_id;
    let card = await axios.get(API_BASE_URL + `${deck_id}/draw/`);
    this.setState({ cards: [...this.state.cards, card.data.cards[0]]});
  }
  render() {
    let cards = this.state.cards.map(card => <Card key= {card.code} cardInfo={card}/>)
    return (
      <div className='Deck'>
        <h1>The deck of cards</h1>
        <button onClick={this.getCard}>Get a card!</button>
        {cards}
      </div>
    );
  }
}

export default Deck;
