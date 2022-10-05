import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';

function themeOptions(theme) {
  return {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
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
    stroke: {
      show: true,
      curve: 'straight',
      width: 3,
      dashArray: 0,
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
      },
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    colors: [
      theme.palette.colorDataViz1.main,
    ],
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
    data: [0],
  },
];

const ApexLineChart = ({ graphData = defaultBarData, gHeight = '60px' }) => {
  const theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={graphData}
      type="area"
      height={gHeight}
    />
  );
};

export default ApexLineChart;
