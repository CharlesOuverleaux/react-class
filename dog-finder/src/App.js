import './App.css';
import DogList from './DogList';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <h1 className="alert alert-primary">Dog Finder App</h1>
      <DogList />
    </div>
  );
}

export default App;
