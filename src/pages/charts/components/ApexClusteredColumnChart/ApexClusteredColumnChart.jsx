import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@material-ui/core';
import useStyles from './styles';

const themeOptions = (theme, c) => ({
  chart: {
    type: 'bar',
    height: 430,
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
            columnWidth: (parseInt(c.hPerc, 10) * 3.5),
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
  ],
  plotOptions: {
    bar: {
      columnWidth: c.hPerc,
      dataLabels: {
        position: 'top',
      },
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
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      fontSize: '12px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'normal',
    },
    formatter(val) {
      if (val === 0) { return ' 0'; } return '';
    },
    offsetX: 0,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
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
  grid: {
    strokeDashArray: 2,
    xaxis: {
      axisBorder: { show: false },
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
  xaxis: {
    axisBorder: {
      height: 3,
      show: true,
    },
    axisTicks: {
      show: false,
    },
    categories: c.xCategory,
    labels: {
      style: {
        fontSize: '14px',
      },
      formatter(value) {
        return value;
      },
    },
  },
  yaxis: {
    axisTicks: {
      show: false,
    },
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
});

const defaultProps = {
  series: [{
    data: [0, 0, 0, 0, 0],
  }, {
    data: [0, 0, 0, 0, 0],
  }],
  maxValue: 30,
  hPerc: '50',
  xCategory: ['No Data'],
};

const ApexBarChart = ({
  config = defaultProps.series,
}) => {
  const theme = useTheme();
  const custStyles = useStyles();

  return (
    <div>
      <ReactApexChart
        options={themeOptions(theme, config)}
        series={config.series}
        type="bar"
        height="350"
        className={custStyles.globalApexStyles}
      />
    </div>
  );
};

export default ApexBarChart;
