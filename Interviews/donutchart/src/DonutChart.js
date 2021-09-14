import React from 'react';
import Chart from 'react-apexcharts'

export default function DonutChart(props){
  const dataSeries = props.data.data.map(i => i.value);
  const options = {
    series: dataSeries,
    chartOptions: {
      labels: props.data.data.map(i => i.label),
      title: {
        text: props.data.title,
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238'
        }
      }
      }
    }

  return (
    <div className="donut">
      <Chart options={options.chartOptions} series={options.series} type="donut" width="380" />
      <span>{props.data.totalData} {props.data.totalLabel}</span>
    </div>
  );
}
