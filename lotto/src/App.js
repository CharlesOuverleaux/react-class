import './App.css';
import Lottery from "./lottery";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Second lottery" maxBalls={4} maxNums={20}/>
      <Lottery title="Third lottery" maxBalls={5} maxNums={10} />
    </div>
  );
}

export default App;
