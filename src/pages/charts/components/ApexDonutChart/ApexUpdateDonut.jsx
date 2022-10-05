import React from 'react';
import { useTheme } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';

const themeOptions = (theme, config, staticConfig) => ({
  plotOptions: {
    radialBar: {
      hollow: {
        size: '72%',
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: 10,
          show: true,
          color: theme.palette.colorBlack.main,
          fontSize: '60px',
          formatter(val, nam, yp) {
            if (staticConfig.isNaN === 1) {
              return 'N/A';
            }
            return `${parseInt(yp.config.series[0], 10)}%`;
          },
        },
        value: {
          offsetY: 20,
          fontSize: '16px',
          formatter() {
            return staticConfig.label;
          },
          show: true,
        },
      },
    },
  },
  colors: [
    staticConfig.color,
  ],
  chart: {
    type: 'donut',
  },
  markers: {
    size: 5,
  },
  stroke: {
    lineCap: staticConfig.strokeLineCap,
    show: false,
  },
  track: {
    background: '#fff',
    strokeWidth: '33%',
    margin: 0, // margin is in pixels
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
  },
  labels: ['Median Ratio'],
});

const defaultprops = {
  series: [65],
};

const ApexUpdateDonut = ({ config = defaultprops }) => {
  const theme = useTheme();

  const staticConfig = {
    isNaN: 0,
    strokeLineCap: 'round',
    mainPerc: [36],
    label: (!config.label) ? 'red' : config.label,
    color: (!config.color) ? (theme.palette.colorDataViz1.main) : config.color,
  };

  if (config.series[0] === 0) {
    staticConfig.strokeLineCap = 'butt';
  }

  if (config.series[0] === undefined) {
    staticConfig.strokeLineCap = 'butt';
    staticConfig.isNaN = 1;
  }

  if (config.series[0]) {
    const mainObj = config.series;
    staticConfig.mainPerc = mainObj;
  } else {
    staticConfig.mainPerc = [0];
  }

  return (
    <>
      <ReactApexChart
        options={themeOptions(theme, config, staticConfig)}
        series={staticConfig.mainPerc}
        type="radialBar"
        height="350"
      />
    </>
  );
};

export default ApexUpdateDonut;
