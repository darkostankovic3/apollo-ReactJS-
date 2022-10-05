import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import classNames from 'classnames';
import {
  useTheme,
  Typography,
  Box,
} from '@material-ui/core';
import useStyles from '../styles';

const themeOptions = (theme) => ({
  plotOptions: {
    radialBar: {
      track: {
        background: '#EEE',
      },
      hollow: {
        size: '58%',
      },
      dataLabels: {
        label: {
          show: true,
          formatter(values) {
            return `${values.series[0]}%`;
          },
        },
        total: {
          show: true,

          formatter() {
            return 'Active';
          },
        },

      },
    },
  },
  colors: [
    theme.palette.colorDataViz1.main,
    theme.palette.colorDataViz2.main,
  ],
  chart: {
    type: 'donut',
  },
  markers: {
    size: 5,
  },
  stroke: {
    show: false,
    lineCap: 'round',
  },
  labels: ['Percent'],
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
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
      },
      legend: {
        position: 'bottom',
      },
    },
  }],
});

const values = {
  series: [65, 85],
};

const ApexUpdateDonut = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [state] = useState(values);

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" m={1} p={1}>
        <Box display="flex" flexDirection="column" alignItems="center" p={1}>
          <Typography className={classes.largeStat} display="inline">
            {values.series[0]}
            %
          </Typography>
          <Typography className={classes.minStat} display="inline">Complete</Typography>
        </Box>
        <Box p={1}>
          <ReactApexChart
            options={themeOptions(theme)}
            series={state.series}
            type="radialBar"
            height="350"
            className={classes.globalApexStyles}
          />
        </Box>
        <Box display="flex" p={1} flexDirection="column" alignItems="center">
          <Typography className={classes.largeStat} display="inline">
            {values.series[1]}
            %
          </Typography>
          <Typography className={classNames(classes.minStat, classes.colorDataViz2)} display="inline">Overdue</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ApexUpdateDonut;
