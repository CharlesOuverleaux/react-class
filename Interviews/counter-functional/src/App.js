import './App.css';
import React, { useState } from 'react';

function App() {
  // defining state count to 0
  const[count, setCount] = useState(0);
  // adding call back to increment count
  const handleClickIncrement = () => {
    setCount(count + 1);
  }
  const handleClickDecrement = () => {
    if (count >= 1) { setCount(count - 1)}
    else { alert('Count can not be lower than 0')}
  }
  return (
    <div className="App">
      <h1>Counter: {count} </h1>
      <button onClick={handleClickIncrement}>Add 1</button>
      <button onClick={handleClickDecrement}>Remove 1</button>
    </div>
  );
}

export default App;
