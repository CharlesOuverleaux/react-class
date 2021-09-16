import React, { useState } from 'react';

export default function CounterState() {
  // defining state count to 0
  const [count, setCount] = useState(0);
  // adding call-back to increment count
  const handleClickIncrement = () => {
    setCount(count + 1);
  }
  const handleClickDecrement = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>Counter using useState: {count} </h1>
      <button onClick={handleClickIncrement}>Add 1</button>
      <button onClick={handleClickDecrement}>Remove 1</button>
    </div>
  );
}
