import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: "Walk The Goldfish", completed: true },
  { id: 2, task: "Walk dogs", completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props){
  const todoData = useTodoState(defaultTodos);
  return (
    // value can only be a single item, we wrap all in context provider
    <TodosContext.Provider value={todoData}>
    {/* all children will get the context */}
      {props.children}
    </TodosContext.Provider>
  )
}
