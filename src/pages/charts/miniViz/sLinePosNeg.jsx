import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from '../styles';

function themeOptions(theme) {
  return {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      theme.palette.colorDataViz2.main,
    ],
    grid: {
      strokeDashArray: 2,
      padding: {
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
      yaxis: [{
        y: 0,
        borderColor: '#000',
        label: {
          borderColor: '#000',
          style: {
            color: '#fff',
            background: '#000',
          },
          text: 'Support',
        },
      }, {
        y: 0,
        y2: -100,
        borderColor: '#000',
        fillColor: '#333',
        opacity: 0.2,
        label: {
          borderColor: '#333',
          style: {
            fontSize: '10px',
            color: '#FFF',
            background: '#333',
          },
          text: 'Negative Values',
        },
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
    data: [0, 0, 0, 0],
  },
];

const ApexLineChart = ({ barDatas = defaultBarData, bHeight = '30px', cMarker = 'Pink' }) => {
  const theme = useTheme();
  const classes = useStyles();

  const mMaxY = Math.max.apply(null, barDatas[0].data);
  const mMinY = Math.min.apply(null, barDatas[0].data);

  const mMaxX = barDatas[0].data.reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0);
  const mMinX = barDatas[0].data.indexOf(Math.min.apply(null, barDatas[0].data));

  return (
    <ApexCharts
      options={themeOptions(theme, {
        cMarker,
        mMaxX,
        mMaxY,
        mMinX,
        mMinY,
      })}
      series={barDatas}
      type="line"
      height={bHeight}
      className={classes.globalApexStyles}
    />
  );
};

export default ApexLineChart;
