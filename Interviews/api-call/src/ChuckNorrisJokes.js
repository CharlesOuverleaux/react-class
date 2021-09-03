import React, { Component } from "react";
import "./ChuckNorrisJokes.css";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Joke from './Joke';

class ChuckNorrisJokes extends Component {
  constructor(props){
    super(props);
    this.state = {
      joke: []
    }
    this.getJoke = this.getJoke.bind(this);
  }
  async getJoke(){
    const options = {
      method: 'GET',
      url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      headers: {
        accept: 'application/json',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': '77f8b643a8msha74d6ca724b406dp1d351djsn32670d0e90ce'
      }
    };

    let joke = await axios.request(options).then(response => response, err => console.log(err));
    console.log(joke);
    this.setState({joke: [...this.state.joke, joke.data]});
  }

  render(){
    return(
      <div className='ChuckNorrisJokes'>
        <h1>Get your Chuck Norris Fact</h1>
        <button onClick={this.getJoke}>Fetch new joke</button>
        {this.state.joke.map(j =>
          <Joke
            key={uuidv4()}
            text={j.value}
            img_src={j.icon_url}
            />
        )}
      </div>
    )
  }
}

export default ChuckNorrisJokes;
