import React, { Component } from "react";
import './Deck.css';
import Card from "./Card";
import axios from 'axios';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/'

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {deck_id: null, cards:[], remaining: null}
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount(){
    let deck = await axios.get(API_BASE_URL + 'new/shuffle/');
    this.setState({deck_id: deck.data.deck_id , remaining: deck.data.remaining})
  }
  async getCard(){
    let deck_id =  this.state.deck_id;
    let card = await axios.get(API_BASE_URL + `${deck_id}/draw/`);
    this.setState({ cards: [...this.state.cards, card.data.cards[0]],remaining: this.state.remaining - 1});
  }
  render() {
    let cards = this.state.cards.map(card => <Card key= {card.code} cardInfo={card}/>)
    let end_game = this.state.remaining === 0;
    return (
      <div className='Deck'>
        <h1>The deck of cards: {this.state.remaining}/52</h1>
        {end_game ? <p>You have used all cards</p> : <button onClick={this.getCard}>Get a card!</button>}
        <div className='Card-area'>
        {cards}
        </div>
      </div>
    );
  }
}

export default Deck;
