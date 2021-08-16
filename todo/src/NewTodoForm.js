import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskName: ''
    }
  }
  render() {
    return(
      <div className='NewTodoForm'>
        <p>I'm a form</p>
        <form>
          <label htmlFor='taskName'></label>
          <input name='taskName' value={this.state.taskName}></input>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default NewTodoForm;
