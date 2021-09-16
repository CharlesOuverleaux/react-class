import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/todos.reducer';

const defaultTodos = [
  { id: 1, task: "Draw a unicorn", completed: true },
  { id: 2, task: "Buy more club mate", completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props){
  const [todos, dispatch] = useReducer(reducer, defaultTodos )
  return (
    // value can only be a single item, we wrap all in context provider
    <TodosContext.Provider value={{todos, dispatch}}>
    {/* all children will get the context */}
      {props.children}
    </TodosContext.Provider>
  )
}
