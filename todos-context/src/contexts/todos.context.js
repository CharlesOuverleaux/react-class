import React, { createContext } from 'react';
import reducer from '../reducers/todos.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1, task: "Draw a unicorn", completed: true },
  { id: 2, task: "Buy more club mate", completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, reducer)
  return (
    // value can only be a single item, we wrap all in context provider
    <TodosContext.Provider value={todos}>
    {/* all children will get the context */}
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
