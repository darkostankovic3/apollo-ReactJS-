import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';
import useStyles from '../styles';

function themeOptions(theme, custData) {
  return {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
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
      },
    },
    grid: {
      strokeDashArray: 2,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    stroke: {
      show: true,
      width: 3,
    },
    layout: {
      padding: {
        top: 20,
      },
    },
    markers: {
      show: false,
    },
    annotations: {
      position: 'back',
      yaxis: [{
        y: custData.mMaxY,
        y2: custData.mMinY,
        fillColor: theme.palette.colorNeutral1.main,
        opacity: 1,
        yAxisIndex: 0,
        borderColor: theme.palette.colorNeutral1.main,
      }],
      points: [{
        x: custData.mMaxX + 1,
        y: custData.mMaxY + 1,
        marker: {
          size: custData.showMarker ? 5 : 0,
          fillColor: '#fff',
          strokeColor: theme.palette.colorDataViz1.main,
          radius: 1,
        },
      }, {
        x: custData.mMinX + 1,
        y: custData.mMinY + 1,
        marker: {
          size: custData.showMarker ? 5 : 0,
          fillColor: '#fff',
          strokeColor: theme.palette.colorDataViz1.main,
          radius: 1,
        },
      }],
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    colors: [
      theme.palette.colorDataViz1.main,
    ],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      show: false,
      max: custData.mMaxY + 12,
      min: custData.mMinY - 12,
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
  };
}

const defaultBarData = [
  {
    data: [100, 60, 40, 100, 20, 90, 40, 100],
  },
];

const ApexLineChart = ({ graphData = defaultBarData, gHeight = '80px' }) => {
  const theme = useTheme();
  const classes = useStyles();

  let mMaxY = 0; let mMinY = 0;
  let mMaxX = 0; let mMinX = 0;
  let showMarker = 0;

  if (graphData[0] !== undefined) {
    mMaxY = Math.max.apply(null, graphData[0].data);
    mMinY = Math.min.apply(null, graphData[0].data);
    mMaxX = graphData[0].data.reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0);
    mMinX = graphData[0].data.indexOf(Math.min.apply(null, graphData[0].data));
    showMarker = (graphData[0].data.reduce((a, b) => a + b, 0) > 0);
  }

  return (
    <div className={classes.LCoffset}>
      <ApexCharts
        options={themeOptions(theme, {
          mMaxX,
          mMaxY,
          mMinX,
          mMinY,
          showMarker,
        })}
        series={graphData}
        type="line"
        height={gHeight}
      />
    </div>
  );
};

export default ApexLineChart;
