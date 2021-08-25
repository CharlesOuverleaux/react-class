import React, { Component } from "react";
import './JokePage.css';
import axios from 'axios';

class JokePage extends Component {
  constructor(props){
    super(props);
    this.state = { jokes: []}
  }
  async componentDidMount(){
    for (let i = 0; i < 10; i++) {
      let res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'Application/json' } });
      let joke = res.data.joke;
      this.setState({
        jokes: [...this.state.jokes, joke]
      })
    }
  }
  render() {
    let jokes = this.state.jokes;
    return(
      <div className='JokePage'>
        <h2>I'm the JokePage</h2>
        {jokes}
      </div>
    )
  }
}

export default JokePage;
