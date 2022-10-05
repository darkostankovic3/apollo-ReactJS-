import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from './styles';

function themeOptions(theme, c) {
  return {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
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
        fontSize: '14px',
      },
    },
    markers: {
      size: 5,
    },
    stroke: {
      width: 3,
    },
    colors: [
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz2.main,
      theme.palette.colorDataViz3.main,
      theme.palette.colorDataViz4.main,
      theme.palette.colorDataViz5.main,
      theme.palette.colorDataViz6.main,
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz2.main,
    ],
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
        },
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        height: 3,
        show: true,
      },
      categories: c.xCategory,
      labels: {
        style: {
          fontSize: '14px',
        },
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      markers: {
        width: 16,
        height: 16,
        offsetX: '-7px',
        offsetY: '2px',
      },
      itemMargin: {
        horizontal: 15,
      },
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '14px',
      fontWeight: 400,
    },
    grid: {
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
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
        show: true,
      },
      x: {
        formatter(i, v) {
          return `${v.series[v.seriesIndex][v.dataPointIndex]}%`;
        },
      },
      y: {
        show: false,
        formatter: (i) => (i),
        title: {
          formatter: () => '',
        },
      },
    },

  };
}

const defaultProps = {
  series: [
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
      data: [1, 3, 5, 3, 4, 52, 4],
    },
  ],
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

export default function ApexLineChart(config = defaultProps) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ApexCharts
      options={themeOptions(theme, config.config)}
      series={config.config.series}
      type="line"
      height={350}
      className={classes.globalApexStyles}
    />
  );
}
