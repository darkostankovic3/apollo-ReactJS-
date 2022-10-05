import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';

const themeOptions = (theme, config) => ({
  chart: {
    type: 'bar',
    sparkline: {
      enabled: true,
    },
  },
  colors: [
    theme.palette.colorNeutral4.main,
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
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: config.mMaxY,
          to: config.mMaxY,
          color: theme.palette.colorDataViz1.main,
        }, {
          from: config.mMinY,
          to: config.mMinY,
          color: '#000',
        }],
      },
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
});

const defaultBarData = [
  {
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
];

const ApexLineChart = ({ graphData = defaultBarData, gHeight = '40' }) => {
  const theme = useTheme();

  let mMaxY = 0; let mMinY = 0; let mSum = 0;

  if (graphData[0] !== undefined) {
    mMaxY = Math.max.apply(null, graphData[0].data);
    mMinY = Math.min.apply(null, graphData[0].data);
    mSum = graphData[0].data.reduce((a, b) => a + b, 0);
  }

  if (mSum === 0) {
    return (
      <>
        <ApexCharts
          options={themeOptions(theme, {
            mMaxY, mMinY,
          })}
          series={graphData}
          type="line"
          height={gHeight}
        />
      </>
    );
  }
  return (
    <>
      <ApexCharts
        options={themeOptions(theme, {
          mMaxY, mMinY,
        })}
        series={graphData}
        type="bar"
        height={gHeight}
      />
    </>
  );
};

export default ApexLineChart;
