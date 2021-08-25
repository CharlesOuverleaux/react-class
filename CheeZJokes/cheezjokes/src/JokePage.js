import React, { Component } from "react";
import './JokePage.css';
import axios from 'axios';
import Joke from './Joke';
import uuid from 'uuid/v4';

class JokePage extends Component {
  constructor(props){
    super(props);
    this.state = { jokes: []}
  }
  async componentDidMount(){
    let jokes = [];
    for (let i = 0; i < 10; i++) {
      let res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'Application/json' } });
      jokes.push({joke: res.data.joke, votes: 0, id: uuid()});
    }
    this.setState({
      jokes: jokes
    })
  }

  handleVote(id, delta){
    this.setState(st => ({
      jokes: st.jokes.map(j =>
        j.id === id ? {...j, votes: j.votes + delta} : j
        )
    }));
  }
  render() {
    let jokes = this.state.jokes.map(j => <Joke
      key={j.id}
      text={j.joke}
      votes={j.votes}
      upVote={() => this.handleVote(j.id, 1)}
      downVote={() => this.handleVote(j.id, -1)}
      />)
    return(
      <div className='JokePage'>
        {jokes}
      </div>
    )
  }
}

export default JokePage;
