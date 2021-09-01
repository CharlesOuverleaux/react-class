import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import whiskey from './whiskey.jpg';
import tubby from './tubby.jpg';
import hazel from './hazel.jpg';
import React, { Component } from 'react';


class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render(){
    const getDog = props => {
      let name = props.match.params.name;
      let current_dog = this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
      return <DogDetails {...props} dog={current_dog}/>
    }
    return (
      <div className='App'>
        <Switch>
          <Route exact path="/Dogs" render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path='/Dogs/:name' component={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
