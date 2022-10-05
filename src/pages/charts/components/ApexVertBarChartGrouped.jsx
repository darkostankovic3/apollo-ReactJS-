import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';
import useStyles from '../styles';

const themeOptions = (theme) => ({
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'top',
      },
    },
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
  dataLabels: {
    enabled: false,

  },
  marker: {
    show: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
  },
  fill: {
    opacity: 100,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
  },
});

const values = {
  series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43, 21, 49],
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27, 33, 12],
  }, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14, 15, 13],
  }],
};

const ApexBarChart = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [state] = useState(values);
  return (
    <ReactApexChart
      options={themeOptions(theme)}
      series={state.series}
      type="bar"
      height="350"
      className={classes.globalApexStyles}
    />
  );
};

export default ApexBarChart;
