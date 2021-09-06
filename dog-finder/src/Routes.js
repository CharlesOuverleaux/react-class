import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";

class Routes extends Component {
  render(){
    const getDog = props => {
      let name = props.match.params.name;
      let current_dog = this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
      return <DogDetails {...props} dog={current_dog} />
    }
    return(
      <div>
        <Switch>
          <Route exact path="/Dogs" render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path='/Dogs/:name' component={getDog} />
          <Route render={() => <h1>No doggo found!</h1>} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
