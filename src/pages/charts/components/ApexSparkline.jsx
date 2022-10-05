import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from '../styles';

function themeOptions(theme) {
  return {
    markers: {
      size: 5,
    },
    stroke: {
      show: false,
      width: 3,
    },
    colors: [
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz2.main,
      theme.palette.colorDataViz3.main,
      theme.palette.colorDataViz4.main,
      theme.palette.colorDataViz5.main,
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz2.main,
    ],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };
}

const series = [
  {
    name: 'Data',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'Unsigned',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    name: 'Overdue',
    data: [1, 52, 45, 1, 34, 1, 120],
  },
  {
    name: 'Way Overdrive',
    data: [19, 81, 81, 52, 5, 110, 120],
  },
];

export default function ApexLineChart() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="line"
      height={350}
      group="social"
      className={classes.globalApexStyles}
    />
  );
}
