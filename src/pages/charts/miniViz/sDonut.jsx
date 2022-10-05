import React from 'react';
import ApexCharts from 'react-apexcharts';

import { useTheme } from '@material-ui/core';

function themeOptions(theme, hollowSize) {
  return {
    chart: {
      type: 'radialBar',
      width: 50,
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      theme.palette.colorDataViz1.main,
    ],
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
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: theme.palette.colorNeutral4.main,
          margin: 0,
        },
        hollow: {
          margin: 0,
          size: hollowSize,
        },
        dataLabels: {
          show: false,
        },
      },
    },
  };
}

const defaultBarData = [0];

const ApexLineChart = ({
  graphData = defaultBarData, MicroViz,
}) => {
  const theme = useTheme();

  let gHeight = 120;
  let gWidth = 120;
  let hollowSize = '70%';

  if (MicroViz) {
    gHeight = 60;
    gWidth = 60;
    hollowSize = '40%';
  }

  return (
    <div>
      <ApexCharts
        options={themeOptions(theme, hollowSize)}
        series={graphData}
        type="radialBar"
        height={gHeight}
        width={gWidth}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      />
    </div>
  );
};

export default ApexLineChart;
