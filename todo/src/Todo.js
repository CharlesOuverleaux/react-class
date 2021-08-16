import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
  render() {
    return(
      <div className="Todo">
        <p>{this.props.taskTitle}</p>
      </div>
    )
  }
}

export default Todo;
