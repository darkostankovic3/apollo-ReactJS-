import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from '../styles';

function themeOptions(theme) {
  return {
    chart: {
      type: 'pie',
      width: 100,
      height: 40,
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz2.main,
      theme.palette.colorDataViz3.main,
      theme.palette.colorDataViz4.main,
      theme.palette.colorDataViz5.main,
      theme.palette.colorDataViz6.main,
    ],
    stroke: {
      width: 1,
    },
    tooltip: {
      enabled: false,
      fixed: {
        enabled: false,
        position: 'topRight',
      },
    },
  };
}

const defaultBarData = [43, 32, 12, 9];

const ApexLineChart = ({ barDatas = defaultBarData }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={barDatas}
      type="pie"
      width={100}
      height={40}
      className={classes.globalApexStyles}
    />
  );
};

export default ApexLineChart;
