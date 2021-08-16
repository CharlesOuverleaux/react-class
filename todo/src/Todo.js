import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
  render() {
    return(
      <div className="Todo">
        <p>{this.props.taskTitle}</p>
        <p>{this.props.id}</p>
        <button onClick={this.props.removeTask}>Edit</button>
        <button onClick={this.props.editTask}>X</button>
      </div>
    )
  }
}

export default Todo;
