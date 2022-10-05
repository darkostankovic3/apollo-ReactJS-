import React from 'react';
import { useTheme } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';
import useStyles from './styles';

const themeOptions = (theme) => ({
  chart: {
    type: 'rangeBar',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
    },
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px',
      color: '#fff',
      backgroundColor: '#909',

    },
    marker: {
      show: false,
    },
  },
  noData: {
    text: 'No data',
    align: 'center',
    verticalAlign: 'middle',
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
    theme.palette.colorDataViz6.main,
  ],
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
  xaxis: {
    type: 'datetime',
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        fontSize: '14px',
      },
    },
  },
});

const defaultProps = {
  series: [
    {
      name: 'Data not Loading?',
      data: [
        {
          x: 'Default Props Loading',
          y: [
            new Date('2019-02-05').getTime(),
            new Date('2019-04-08').getTime(),
          ],
        },
      ],
    },
  ],
};

const ApexBarChart = ({
  mData = defaultProps,
}) => {
  const theme = useTheme();
  const custStyles = useStyles();
  return (
    <ReactApexChart
      options={themeOptions(theme)}
      series={mData.series}
      type="rangeBar"
      height="600"
      className={custStyles.globalApexStyles}
    />
  );
};

export default ApexBarChart;
