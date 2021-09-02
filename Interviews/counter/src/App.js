import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      user_data: [],
      currPage: 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.fetchNewData =this.fetchNewData.bind(this);
  }
  handleClick(){
    this.setState({counter: this.state.counter + 1})
  }

  async fetchNewData(){
    let pageNum = this.state.currPage;
    const BASEURL = `https://randomuser.me/api?page=${pageNum}`;
    let api_call = await axios.get(BASEURL)
      .then(function (response) {
        return response.data.results;
      })
    this.setState({
      user_data: [...this.state.user_data, api_call[0]],
      currPage: this.state.currPage + 1
    })
  }

  render(){
    return(
      <div className='App'>
        <h1>Counter app</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={this.fetchNewData}>Fetch new data</button>
        <div className='Users'>
        {this.state.user_data.map((user,i) =>
          <div key={i} className='UserInfo'>
            <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
            <img alt={user.name.first} src={user.picture.medium} />
          </div>
          )}
        </div>
      </div>
    )
  }
}

export default App;
