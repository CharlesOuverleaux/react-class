import React, { Component } from 'react';
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTask = { ...this.state, id: uuidv4() }
    this.props.createTask(newTask);
  }

  render() {
    return(
      <div className='NewTodoForm'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='taskName'></label>
          <input
            name='taskName'
            value={this.state.taskName}
            onChange={this.handleChange}
            placeholder="Add a new task...">
            </input>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default NewTodoForm;
