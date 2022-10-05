import React from 'react';
import { useTheme } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';

const themeOptions = (theme) => ({
  chart: {
    height: 600,
    type: 'rangeBar',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
    },
  },
  xaxis: {
    type: 'datetime',
  },
  fill: {
    type: 'solid',
    colors: [
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz2.main,
      theme.palette.colorDataViz3.main,
      theme.palette.colorDataViz4.main],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
  },
  style: {
    colors: [
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz1.main,
      theme.palette.colorDataViz1.main,
    ],
  },

});

const values = {
  series: [
    {
      name: 'Bob Jones',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime(),
          ],
        },
        {
          x: 'Respiration',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime(),
          ],

        },
        {
          x: 'Blood Pressure',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
        {
          x: 'Skin Tone',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime(),
          ],
        },
        {
          x: 'Foot Rash',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
        {
          x: 'Repiration',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-03').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Joe Smith',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
        {
          x: 'Respiration',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-07').getTime(),
          ],
        },
        {
          x: 'Blood Pressure',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-22').getTime(),
          ],
        },
        {
          x: 'Skin Tone',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Dan Johnson',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Dan Johnson',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Dan Johnson',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
      ],
    },
  ],
};

const ApexBarChart = () => {
  const theme = useTheme();
  return (
    <ReactApexChart
      options={themeOptions(theme)}
      series={values.series}
      type="rangeBar"
      height="600"
    />
  );
};

export default ApexBarChart;
