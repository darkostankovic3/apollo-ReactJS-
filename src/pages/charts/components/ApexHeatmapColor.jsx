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
    name: 'Monday',
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Tuesday',
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Wednesday',
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Thursday',
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Friday',
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: 'Saturday',
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
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
    colorScale: {
      ranges: [{
        from: -30,
        to: 5,
        name: 'low',
        color: theme.palette.colorGreen.main,
      },
      {
        from: 6,
        to: 15,
        name: 'medium',
        color: theme.palette.colorBlue.main,
      },
      {
        from: 16,
        to: 22,
        name: 'high',
        color: theme.palette.colorOrange.main,
      },
      {
        from: 23,
        to: 33,
        name: 'extreme',
        color: theme.palette.colorFuchsia.main,
      },
      {
        from: 34,
        to: 45,
        name: 'very extreme',
        color: theme.palette.colorPurple.main,
      },
      {
        from: 46,
        to: 55,
        name: 'toxic extreme',
        color: theme.palette.colorFuchsia.main,
      },
      ],
    },
  };
}

export default function ApexLineChart() {
  const theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="heatmap"
      height={450}
    />
  );
}
