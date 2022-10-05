import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@material-ui/core';
import useStyles from './styles';

const themeOptions = (theme, p) => ({
  plotOptions: {
    bar: {
      barHeight: p.mPerc,
      distributed: true,
      horizontal: true,
      endingShape: 'flat',
      dataLabels: {
        position: 'bottom',
      },
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
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      fontWeight: '500',
      fontSize: '14px',
    },
    formatter(val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    offsetX: -24,
    offsetY: -25,
    dropShadow: {
      enabled: false,
    },
    colors: ['#304758'],
  },
  grid: {
    strokeDashArray: 2,
    padding: {
      left: 0,
      right: 0,
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
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
      formatter: (i, v) => `${v.w.config.tooltip.descriptions[v.dataPointIndex]}`,
    },
  },
  xaxis: {
    axisBorder: {
      color: '#FFF',
      height: 1,
    },
    axisTicks: {
      show: false,
    },
    categories: p.mCat,
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
    axisBorder: {
      show: false,
    },
    min: 0,
    max: p.mMaxValue,
    labels: {
      style: {
        fontSize: '14px',
      },
      show: false,
    },
  },
  chart: {
    toolbar: {
      show: false,
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
    data: [1, 1, 1, 1, 1],
  }],
  maxValue: '60',
  hPerc: '60',
};

const createCategory = (c) => {
  const cat = [];
  c.forEach((v, i) => {
    if (v === 0) {
      cat.push([`Label ${i + 1}`, ' ', ' 0']);
    } else {
      cat.push(`Label ${i + 1}`);
    }
  });
  return cat;
};

const ApexBarChart = ({
  mData = defaultProps.series,
  mMaxValue = defaultProps.maxValue,
  mPerc = defaultProps.hPerc,
}) => {
  const theme = useTheme();
  const custStyles = useStyles();

  const mCat = createCategory(mData[0].data);

  return (
    <div>
      <ReactApexChart
        options={themeOptions(theme, { mMaxValue, mPerc, mCat })}
        series={mData}
        type="bar"
        height="350"
        className={custStyles.globalApexStyles}
      />
    </div>
  );
};

export default ApexBarChart;
