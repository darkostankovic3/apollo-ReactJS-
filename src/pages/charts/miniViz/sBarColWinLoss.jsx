import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from '../styles';

const themeOptions = (theme) => ({
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true,
    },
  },
  colors: [
    theme.palette.colorDataViz2.main,
  ],
  plotOptions: {
    bar: {
      columnWidth: '80%',
    },
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
});

const defaultBarData = [
  {
    data: [0, 81, 81, 52, 5, 110, 120],
  },
];

const ApexLineChart = ({ barDatas = defaultBarData }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={barDatas}
      type="bar"
      width={100}
      height={35}
      className={classes.globalApexStyles}
    />
  );
};

export default ApexLineChart;
