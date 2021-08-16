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
  }

  create(newTask) {
    this.setState(({ tasks: [...this.state.tasks, newTask] }))
  }

  remove(id) {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) })
  }

  edit(id, newTitle) {
    let tasks = [...this.state.tasks];
    let task = this.state.tasks.filter(task => task.id === id)
    task[0].taskTitle = newTitle;
    tasks.push(task)
    this.setState({tasks});
  }

  render() {
    const tasks = this.state.tasks.map(task => {
      return <Todo
                taskTitle={task.taskTitle}
                key={task.id}
                removeTask={() => this.remove(task.id)}
                editTask={() => this.edit(task.id, task.taskTitle)}
                />
    })
    return (
      <div className="TodoList">
        {tasks}
        <NewTodoForm createTask={this.create}/>
      </div>
    )
  }
}

export default TodoList;
