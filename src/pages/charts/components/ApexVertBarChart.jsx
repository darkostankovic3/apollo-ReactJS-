import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';
import useStyles from '../styles';

const themeOptions = (theme) => ({
  plotOptions: {
    bar: {
      columnWidth: '16px',
      distributed: true,
      endingShape: 'flat',
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
  fill: {
    opacity: 1,
    colors: [
      theme.palette.colorDataViz1.main,
    ],
  },
  xaxis: {
    categories: [
      ['John', 'Doe'],
      ['Joe', 'Smith'],
      ['Jake', 'Williams'],
      ['Peter', 'Brown'],
      ['Tom', 'Taylor'],
    ],
    labels: {
      style: {
        colors: [
          theme.palette.text.primary,
        ],
        fontSize: '12px',
      },
    },
  },
  chart: {
    toolbar: {
      show: false,
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
        return `<span style="font-size:20px">${v.series[0][v.dataPointIndex]}% </span>`;
      },
    },
    y: {
      show: true,
      formatter: (i, v) => (v.w.config.tooltip.descriptions[v.dataPointIndex]),
      title: {
        formatter: () => '',
      },
    },
  },
  legend: {
    show: false,
  },
  labels: {
    style: {
      color: [
        theme.palette.colorDataViz1.main,
      ],
      fontSize: '12px',
    },
  },
});

const values = {
  series: [
    {
      data: [21, 22, 10, 28, 98],
    },
  ],
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
