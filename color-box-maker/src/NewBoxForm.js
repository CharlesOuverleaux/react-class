import React, { Component } from "react";
import "./NewBoxForm.css";
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
  constructor(props){
    super(props);
    this.state = {width: '', height: '', color:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt){
    // this avoids the page to reload every time on Submit
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4()}
    this.props.createBox(newBox);
  }

  render () {
    return(
      <div className='NewBoxForm'>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width</label>
        <input
          type='text'
          name='width'
          value={this.state.width}
          id='width'
          onChange={this.handleChange}
          />
        <label htmlFor="height">Height</label>
        <input
          type='text'
          name='height'
          value={this.state.height}
          id='height'
          onChange={this.handleChange}
        />
        <label htmlFor="color">Color</label>
        <input
          type='text'
          name='color'
          value={this.state.color}
          id='color'
          onChange={this.handleChange}
        />
        <button>Add new box</button>
      </form>
      </div>
    )
  }
}

export default NewBoxForm;
