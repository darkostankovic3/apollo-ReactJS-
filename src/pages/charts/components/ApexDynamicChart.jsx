import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from '../styles';

const series = [
  {
    name: 'Signed',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'Unsigned',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    name: 'Overdue',
    data: [29, 52, 45, 1, 34, 1, 120],
  },
];

function themeOptions(theme) {
  return {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    fill: {
      colors: [
        theme.palette.colorBlue.light,
        theme.palette.colorGreen.light,
        theme.palette.colorPurple.light],
    },
    colors: [
      theme.palette.colorBlue.main,
      theme.palette.colorGreen.main,
      theme.palette.colorPurple.main],
    chart: {
      id: 'realtime',
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
  };
}

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const updateDataSequence = (lastSequence) => {
  lastSequence.unshift(randomNumber());
  lastSequence.splice(-1, 1);
  return lastSequence;
};

export default function ApexLineChart() {
  const theme = useTheme();
  const classes = useStyles();
  const [updatingData, setupdatingData] = useState(series);

  useEffect(() => {
    setInterval(() => {
      setupdatingData(
        [
          {
            name: 'Signed',
            data: updateDataSequence(updatingData[0].data),
          },
          {
            name: 'Unsigned',
            data: updateDataSequence(updatingData[1].data),
          },
          {
            name: 'Overdue',
            data: updateDataSequence(updatingData[2].data),
          },
        ],
      );
    }, 3000);
  }, []);

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={updatingData}
      type="line"
      height={350}
      className={classes.globalApexStyles}
    />
  );
}
