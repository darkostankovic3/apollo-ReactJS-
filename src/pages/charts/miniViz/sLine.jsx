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
  };
}

const defaultBarData = [
  {
    data: [50, 100, 0, 90, 20, 100, 0, 30],
  },
];

const ApexLineChart = ({ barDatas = defaultBarData, bHeight = '30px' }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={barDatas}
      type="line"
      height={bHeight}
      width="120px"
      className={classes.globalApexStyles}
    />
  );
};

export default ApexLineChart;
