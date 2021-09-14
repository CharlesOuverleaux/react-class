import React from 'react';
import Chart from 'react-apexcharts';
import "./DonutChart.css";

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
          fontSize: '22px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238',
        }
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: props.data.totalData,
                fontSize: '28px',
                fontWeight: 'bold',
                formatter: () => `${props.data.totalLabel}`
              }
            }
          }
        }
      },
      colors: ['#f72585', '#4cc9f0', '#560bad'],
      chart: {
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString()
              }
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            }
          },
          autoSelected: 'zoom'
        },
      }
      }
    }
  return (
    <div className="donut">
      <Chart options={options.chartOptions} series={options.series} type="donut" />
      <span></span>
    </div>
  );
}
