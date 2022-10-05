import React from 'react';
import { useTheme } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';
import useStyles from './styles';

const themeOptions = (theme, c) => ({
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 650,
      options: {
        plotOptions: {
          bar: {
            columnWidth: (parseInt(c.hPerc, 10) * 2.5),
          },
        },
      },
    },
  ],
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
  colors: [
    theme.palette.colorDataViz1.main,
    theme.palette.colorDataViz2.main,
    theme.palette.colorDataViz3.main,
    theme.palette.colorDataViz4.main,
    theme.palette.colorDataViz5.main,
  ],
  plotOptions: {
    bar: {
      columnWidth: c.hPerc,
      horizontal: false,
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: false,
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
      show: false,
    },
    x: {
      formatter(i, v) {
        return `${v.series[v.seriesIndex][v.dataPointIndex]}%`;
      },
    },
    y: {
      formatter: (i, v) => (v.w.config.tooltip.descriptions[v.dataPointIndex]),
      title: {
        formatter: () => '',
      },
    },
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      height: 3,
      show: true,
    },
    categories: c.xCategory,
    labels: {
      style: {
        fontSize: '14px',
      },
      formatter(val) {
        return `${val}`;
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    tickAmount: 4,
    labels: {
      style: {
        fontSize: '14px',
      },
      show: true,
    },
  },
  fill: {
    opacity: 1,
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
});

const defaultProps = {
  series: [{
    name: 'Series 3',
    data: [1, 1, 1],
  }, {
    name: 'Series 4',
    data: [1, 1, 1],
  }, {
    name: 'Series 5',
    data: [1, 1, 1],
  }],
  maxValue: 30,
  hPerc: '50',
  xCategory: [2007, 2008, 2009],
};

const ApexBarChart = (config = defaultProps) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ReactApexChart
      options={themeOptions(theme, config.config)}
      series={config.config.series}
      type="bar"
      height="350"
      stacked="1"
      className={classes.globalApexStyles}
    />
  );
};

export default ApexBarChart;
