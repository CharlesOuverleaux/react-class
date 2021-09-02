import './App.css';
import React, { Component } from 'react';
import axios from 'axios';



// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      user_data: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.fetch_data = this.fetch_data.bind(this);
  }
  handleClick(){
    this.setState({counter: this.state.counter + 1})
  }

  async fetch_data(){
    const BASEURL = 'https://randomuser.me/api';
    let api_call = await axios.get(BASEURL)
    .then(function (response) {
      // handle success
      let newUserData = JSON.stringify(response.data.results[0]);
      return newUserData;
    })
    this.setState({
      email: api_call
    })
  }

  render(){
    return(
      <div className='App'>
        <h1>Counter app</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={this.fetch_data}>Fetch data</button>
        <p>{this.state.email}</p>
      </div>
    )
  }

}

export default App;
