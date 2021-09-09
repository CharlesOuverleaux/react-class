import { v4 as uuidv4 } from 'uuid';
import UseLocalStorageState from "./useLocalStorageState";

export default function useToDoState(initialToDos) {
  const [todos, setToDos] = UseLocalStorageState('todos', initialToDos);
  return {
    todos,
    addToDo: newToDoText => {
      setToDos([...todos, { id: uuidv4(), task: newToDoText, complete: false }]);
    },
    removeToDo: toDoId => {
      const updatedToDo = todos.filter(todo => toDoId !== todo.id);
      setToDos(updatedToDo);
    },
    toggleToDo: toDoId => {
      const updatedToDo = todos.map(todo =>
        todo.id === toDoId ? { ...todo, complete: !todo.complete } : todo)
      setToDos(updatedToDo);
    },
    editToDo: (toDoId, newTask) => {
      const editedToDo = todos.map(todo =>
        todo.id === toDoId ? { ...todo, task: newTask } : todo)
      setToDos(editedToDo);
    }

  }
}
