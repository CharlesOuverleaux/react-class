import React, { Component } from 'react';
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskTitle: ''
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
    const newTask = { ...this.state, id: uuidv4(), completed: false}
    this.props.createTask(newTask);
  }

  render() {
    return(
      <div className='NewTodoForm'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='taskTitle'>New task</label>
          <input
            type='text'
            id='taskTitle'
            // this is the name we use for event.target.name
            name='taskTitle'
            value={this.state.taskTitle}
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
