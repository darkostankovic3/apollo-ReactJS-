import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';
import useStyles from '../styles';

const themeOptions = (theme) => ({
  chart: {
    type: 'bar',
    height: 430,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  colors: [
    theme.palette.colorDataViz1.main,
    theme.palette.colorDataViz2.main,
    theme.palette.colorDataViz3.main,
    theme.palette.colorDataViz4.main,
    theme.palette.colorDataViz5.main,
  ],
  grid: {
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  tooltip: {
    descriptions:
        [
          'Description for label 1',
          'Description for label 2',
          'Description for label 3',
          'Description for label 4',
          'Description for label 5',
        ],
    marker: {
      show: false,
    },
    x: {
      show: true,
      formatter(i, v) {
        return `${v.series[0][v.dataPointIndex]}%`;
      },
    },
    y: {
      formatter: (i, v) => (v.w.config.tooltip.descriptions[v.dataPointIndex]),
    },
    fixed: {
      enabled: false,
      position: 'topRight',
      offsetX: 0,
      offsetY: 0,
    },
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter(val) {
        return `${val}K`;
      },
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
  },
});

const values = {
  series: [{
    data: [44, 55, 41, 64, 22, 43, 21],
  }, {
    data: [53, 32, 33, 52, 13, 44, 32],
  }],
};

const ApexBarChart = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [state] = useState(values);
  return (
    <ReactApexChart
      options={themeOptions(theme)}
      series={state.series}
      type="bar"
      height="350"
      stacked="1"
      className={classes.globalApexStyles}
    />
  );
};

export default ApexBarChart;
