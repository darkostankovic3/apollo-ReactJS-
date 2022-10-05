import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';

function themeOptions(theme) {
  return {
    chart: {
      type: 'line',
      background: theme.palette.colorNeutral1.main,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      show: true,
      width: 3,
    },
    noData: {
      text: 'No data',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: -20,
      style: {
        color: theme.palette.colorNeutral5.main,
      },
    },
    colors: [
      theme.palette.colorDataViz1.main,
    ],
    grid: {
      strokeDashArray: 2,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
    layout: {
      padding: {
        top: 20,
      },
    },
    annotations: {
      position: 'back',
      yaxis: [{
        y: 0,
        y2: -120,
        fillColor: theme.palette.colorNeutral4.main,
        opacity: 1,
        yAxisIndex: 0,
      }],
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      enabled: false,
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter() {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
}

const defaultBarData = [
  {
    data: [20, 60, 100, -80, 30, -100, -10, 80, 60, 40],
  },
];

const ApexLineChart = ({ graphData = defaultBarData, gHeight = '80px' }) => {
  const theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={graphData}
      type="line"
      height={gHeight}
    />
  );
};

export default ApexLineChart;
