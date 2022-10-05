import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from './styles';

function themeOptions(theme, showXAxisLabel) {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [1],
      colors: [theme.palette.colorNeutral5.main],
    },
    dataLabels: {
      enabled: false,
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
      size: [5, 5, 0],
    },
    colors: [
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz2.main,
      theme.palette.colorDataViz3.main,
      theme.palette.colorDataViz4.main,
      theme.palette.colorDataViz5.main,
      theme.palette.colorDataViz6.main,
      theme.palette.colorDataViz2.main,
    ],
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
        formatter(i, v) {
          return `${v.series[v.seriesIndex][v.dataPointIndex]}`;
        },
      },
      y: {
        formatter: (i, v) => (v.w.config.tooltip.descriptions[v.dataPointIndex]),
        title: {
          formatter: () => '',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
        },
        hideOverlappingLabels: true,
        formatter(value) {
          return `$${value}`;
        },
      },
      min: 0,
      max: 100,
      tickAmount: 10,
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      strokeDashArray: 2,
      borderColor: '#c2c2c2',
      fillColor: '#c2c2c2',
      labels: {
        show: showXAxisLabel,
        style: {
          fontSize: '14px',
        },
        formatter(value) {
          return `$${value}`;
        },
      },
      min: 0,
      max: 100,
      tickAmount: 4,
      axisTicks: {
        show: false,
      },
      axisBorder: {
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
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}

const defaultProps = {
  series: [
    {
      name: 'Signed',
      type: 'scatter',
      data: [
        [11, 12], [15, 13], [21, 23], [45, 43], [71, 72], [95, 93],
      ],
    },
    {
      name: 'Unsigned',
      type: 'scatter',
      data: [
        [14, 12], [21, 24], [48, 51], [45, 43], [76, 72], [95, 100],
      ],
    }, {
      name: 'Median',
      type: 'line',

      data: [
        [0, 0], [100, 100],
      ],
    },
  ],
  maxValue: 100,
  hPerc: '50',
  xCategory: ['No data'],
};

export default function ApexLineChart({ config = defaultProps }) {
  const theme = useTheme();
  const classes = useStyles();
  let showXAxisLabel = true;

  showXAxisLabel = !!config.series[0];

  return (
    <ApexCharts
      options={themeOptions(theme, showXAxisLabel)}
      series={config.series}
      type="line"
      height={350}
      className={classes.globalApexStyles}
    />
  );
}
