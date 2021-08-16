import './App.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo taskTitle='clean dishes'/>
      <Todo taskTitle='clean laundry'/>
      <Todo taskTitle='cook food'/>
      <NewTodoForm />
    </div>
  );
}

export default App;
