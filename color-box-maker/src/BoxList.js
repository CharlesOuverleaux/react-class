import React, { Component } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = { boxes: [{color:'orange', width:100, height:80}] };
    this.create = this.create.bind(this);
  }
  create(newBox) {
    this.setState({ boxes: [...this.state.boxes, newBox]})
  }
  remove(id) {
    this.setState({boxes: this.state.boxes.filter(box => box.id !== id)})
  }
  render(){
    const boxes = this.state.boxes.map(box => {
      return <Box
        key={uuidv4()}
        color={box.color}
        width={box.width}
        height={box.height}
        removeBox={() => this.remove(box.id)} />
    });
    return (
      <div className='BoxList'>
        <NewBoxForm createBox={this.create} removeBox={this.remove}/>
        {boxes}
      </div>
    )
  }
}

export default BoxList;
