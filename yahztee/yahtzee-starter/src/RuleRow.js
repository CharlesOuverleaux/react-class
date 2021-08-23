import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {doScore, name , score} = this.props;
    let activated = score === undefined;
    return (
      <tr className={`RuleRow RuleRow-${activated ? 'active' : 'disabled'}`}
          onClick={activated ? doScore : null }>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    )
  }
}

export default RuleRow;
