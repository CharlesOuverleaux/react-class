import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    let score = this.props.score === undefined;
    return (
      <tr className={`RuleRow RuleRow-${score ? 'active' : 'disabled'}`}
          onClick={score ? this.props.doScore : null }>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;
