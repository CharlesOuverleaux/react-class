import React, { useReducer } from 'react';

// (state, action) => newValue
// current state
// action that will update the state

function countReducer(state, action){
  // REFACTOR WITH SWITCH
  // if (action.type === "INCREMENT") return {count: state.count + action.amount};
  // if (action.type === "ADD5") return { count: state.count + action.amount };
  // if (action.type === "DECREMENT") return {count: state.count - 1};
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount};
    case "DECREMENT":
      return { count: state.count - 1};
    case "ADD5":
      return { count: state.count + action.amount};
    case "RESET":
      return { count: 0};
    default:
      return alert("No button assigned here")
  }
}

function CounterReduce(){
  // returns the current state paired with a dispatch method
  const [state, dispatch] = useReducer(countReducer, {count: 0})

  return(
    <div className='CounterReduce'>
      <h1>Counter using useReduce: {state.count} </h1>
      <button onClick={() => dispatch({type:"INCREMENT", amount: 1})}>ADD 1</button>
      <button onClick={() => dispatch({ type: "ADD5", amount: 5 })}>ADD 5</button>
      <button onClick={() => dispatch({type:"DECREMENT"})}>SUS 1</button>
      <button onClick={() => dispatch({ type: "RESET"})}>RESET</button>
    </div>
  );
}

export default CounterReduce;
