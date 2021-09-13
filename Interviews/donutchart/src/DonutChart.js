import React from "react";
import './DonutChart';

export default function DonutChart(props){
  return(
    <div className='DonutChart'>
      <h1>Title: {props.data.title}</h1>
      <h2>Label: {props.data.totalLabel}</h2>
      <ul>
        {props.data.data.map(i => <li>{i.label} : {i.value}</li>)}
      </ul>
      {/* ● A Donut chart showing in the middle the total and the label
      ● a Legend of the represented items
      ● a menu button (top-right) that will contain the action item Clone. */}
    </div>
  );
}
