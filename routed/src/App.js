import './App.css';
import Dog from './Dog';
import About from './About';
import {Route, Router, Link, NavLink} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        {/* <a href="/">About</a>
        <a href="/Dog">Dog</a> */}
        {/* Link allows to do client side request */}
        {/* <Link to="/">About</Link>
        <Link to="/Dog">Dog</Link> */}
        <NavLink exact activeClassName='active-link' to="/">About</NavLink>
        <NavLink exact activeClassName='active-link' to="/Dog">Dog</NavLink>

      </nav>
      <Route exact path="/" component={About} />
      <Route exact path="/Dog" render={()=> <Dog name='Marcel'/>} />
    </div>
  );
}

export default App;
