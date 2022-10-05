import React from 'react';
import { useTheme } from '@material-ui/core';
import ApexCharts from 'react-apexcharts';

function generateData(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = `w${(i + 1).toString()}`;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x,
      y,
    });
    i += 1;
  }

  return series;
}

const series = [
  {
    name: 'Allergist',
    data: generateData(6, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Internal',
    data: generateData(6, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Family',
    data: generateData(6, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Geriatric',
    data: generateData(6, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Pedia',
    data: generateData(6, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Ophtha',
    data: generateData(6, {
      min: 0,
      max: 90,
    }),
    xaxis: {
      type: 'category',
      categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
    },
  },
];

function themeOptions(theme) {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.colorDataViz1.main],
  };
}

export default function ApexLineChart() {
  const theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="heatmap"
      height={350}
    />
  );
}
