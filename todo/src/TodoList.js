import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.edit = this.edit.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  create(newTask) {
    this.setState(({ tasks: [...this.state.tasks, newTask] }))
  }

  remove(id) {
    this.setState({ tasks: this.state.tasks.filter(t => t.id !== id) })
  }

  edit(id, updatedTask) {
    // we create a new variable that will hold an array of tasks
    const updatedTodos = this.state.tasks.map(task => {
    // in case we match the task we are modifying we edit its title
      if(task.id === id){
        return {...task, taskTitle: updatedTask}
    // else we just return it intact
      }
      return task;
    })
    // we set the state for all tasks, including the one we changed
    this.setState({ tasks: updatedTodos })
  }

  toggleCompletion(id){
    // we create a new variable that will hold an array of tasks
    const updatedTodos = this.state.tasks.map(task => {
      // in case we match the task we are modifying we edit its title
      if (task.id === id) {
        return { ...task, completed: !task.completed }
        // else we just return it intact
      }
      return task;
    })
    // we set the state for all tasks, including the one we changed
    this.setState({ tasks: updatedTodos })
  }

  render() {
    const tasks = this.state.tasks.map(task => {
      return <Todo
                taskTitle={task.taskTitle}
                key={task.id}
                // we add an id to be able to pass it to the Child, to use remove without arrow function
                id={task.id}
                completed={task.completed}
                title={task.taskTitle}
                removeTask={this.remove}
                editTask={this.edit}
                toggleTask={this.toggleCompletion}
                />
    })
    return (
      <div className="TodoList">
        <ul>
          {tasks}
        </ul>
        <NewTodoForm createTask={this.create}/>
      </div>
    )
  }
}

export default TodoList;
