import './App.css';
import VendingMachine from './VendingMachine';
import {Route, Switch} from 'react-router-dom';
import Bola from "./Bola";
import Bolo from "./Bolo";
import Nata from "./Nata";
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={VendingMachine}/>
        <Route exact path='/bola' component={Bola} />
        <Route exact path='/bolo' component={Bolo} />
        <Route exact path='/nata' component={Nata} />
      </Switch>
    </div>
  );
}

export default App;
