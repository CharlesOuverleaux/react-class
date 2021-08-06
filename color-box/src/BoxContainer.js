import React, { Component } from "react";
import Box from './box';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    nBoxes: 20
  }
  render() {
    const boxes = Array.from({length: this.props.nBoxes}).map(() => <Box />);
    return(
      <div className="BoxContainer">
        {boxes}
      </div>
    )
  }
}

export default BoxContainer;
