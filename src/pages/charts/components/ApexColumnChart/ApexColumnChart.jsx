import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@material-ui/core';
import useStyles from './styles';

const themeOptions = (theme, c) => ({
  plotOptions: {
    bar: {
      columnWidth: c.hPerc,
      distributed: true,
      endingShape: 'flat',
      dataLabels: {
        position: 'bottom',
      },
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
    },
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      fontWeight: '500',
      color: '#000',
    },

    formatter(val) {
      if (val === 0) { return '0'; } return '';
    },
    dropShadow: {
      enabled: false,
    },
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
      show: true,
      formatter(i, v) {
        return `${v.series[0][v.dataPointIndex]}%`;
      },
    },
    y: {
      formatter: (i, v) => (v.w.config.tooltip.descriptions[v.dataPointIndex]),
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
  legend: {
    show: false,
  },
  fill: {
    colors: [theme.palette.colorDataViz1.main],
    opacity: 100,
  },
});

const defaultProps = {
  series: [{
    name: '',
    data: [7, 10, 15, 26, 29],
  }],
  maxValue: 30,
  hPerc: '18',
  xCategory: ['2007', '2008', '2009', '2010', '2011'],
};

const ApexBarChart = ({
  config = defaultProps,
  gHeight = '555',
}) => {
  const theme = useTheme();
  const custStyles = useStyles();

  return (
    <div>
      <ReactApexChart
        options={themeOptions(theme, config)}
        series={config.series}
        type="bar"
        height={gHeight}
        className={custStyles.globalApexStyles}
      />
    </div>
  );
};

export default ApexBarChart;
