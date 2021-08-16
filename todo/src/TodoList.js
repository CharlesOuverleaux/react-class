import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.create = this.create.bind(this)
  }

  create(newTask) {
    this.setState(({ tasks: [...this.state.tasks, newTask] }))
  }
  render() {
    const tasks = this.state.tasks.map(task => {
      return <Todo taskTitle={task.taskTitle} />
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
