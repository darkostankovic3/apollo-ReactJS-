import React from 'react';

import {
  Grid, Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexScatterChart from '../charts/components/ApexScatterChart/ApexScatterChart';

const data1 = {
  series: [
    {
      name: 'Signed',
      type: 'scatter',
      data: [
        [11, 12], [22, 29], [15, 13], [21, 23], [37, 29], [45, 66],
        [71, 89], [71, 72], [82, 89], [95, 93], [100, 93],
      ],
    },
    {
      name: 'Signed',
      type: 'scatter',
      data: [
        [11, 1], [22, 2], [15, 1], [21, 3], [3, 29], [4, 66],
        [7, 89], [71, 7], [82, 9], [9, 93], [0, 93],
      ],
    },
    {
      name: 'Unsigned',
      type: 'scatter',
      data: [
        [19, 19], [29, 29], [19, 3], [21, 20], [30, 20], [40, 60],
        [70, 80], [70, 65], [82, 80], [95, 93], [90, 100],
      ],
    }, {
      name: 'Median',
      type: 'line',
      data: [
        [-1, -1], [101, 101],
      ],
    },
  ],
  maxValue: 100,
  hPerc: '50',
  xCategory: ['No Data'],
};

const data2 = {
  series: [
    {
      name: 'Signed',
      type: 'scatter',
      data: [
        [11, 12], [22, 29], [15, 13], [21, 23], [37, 29], [45, 66],
        [71, 89], [71, 72], [82, 89], [95, 93], [100, 93],
      ],
    },
    {
      name: 'Unsigned',
      type: 'scatter',
      data: [
        [19, 19], [29, 29], [19, 3], [21, 20], [30, 20], [40, 60],
        [70, 80], [70, 65], [82, 80], [95, 93], [90, 100],
      ],
    }, {
      name: 'Median',
      type: 'line',
      data: [
        [0, 0], [100, 100],
      ],
    },
  ],
  maxValue: 100,
  hPerc: '50',
  xCategory: ['No Data'],
};

const noData = {
  series: [
  ],
  maxValue: 100,
  hPerc: '50',
  xCategory: ['No Data'],
};

const bigData = {
  series: [
    {
      name: 'Signed',
      type: 'scatter',
      data: [
        [11, 12], [22, 29], [15, 13], [21, 23], [37, 29], [45, 66],
        [71, 89], [71, 72], [82, 89], [95, 93], [100, 93],
      ],
    },
    {
      name: 'Unsigned',
      type: 'scatter',
      data: [
        [19, 19], [29, 29], [19, 3], [21, 20], [30, 20], [40, 60],
        [70, 80], [70, 65], [82, 80], [95, 93], [90, 100],
      ],
    }, {
      name: 'Median',
      type: 'line',
      data: [
        [0, 0], [100, 100],
      ],
    },
  ],
  maxValue: 100,
  hPerc: '50',
  xCategory: ['No Data'],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Widget title="Apex Scattered Chart" subtitle="Single Series" variant="apexchart">
          <ApexScatterChart config={data1} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={3}>
        <Widget title="Apex Scattered Chart" subtitle="Double Series" variant="apexchart">
          <ApexScatterChart config={data2} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={3}>
        <Widget title="Apex Scattered Chart" subtitle="No Data Chart" variant="apexchart">
          <ApexScatterChart config={noData} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={3}>
        <Widget title="Apex Scattered Chart" subtitle="Lots of Data" variant="apexchart">
          <ApexScatterChart config={bigData} />
        </Widget>
      </Grid>
      <Grid item xs={12}>
        <Widget noBodyPadding disableWidgetMenu>
          <Typography display="inline">
            <b>Designers and Developers Note:</b>
            {' '}
            All of these components are from the Apex Open Source Charts.
            It is easy to include any of these examples in the Library.
          </Typography>
          <Typography display="inline">
            <br />
            <a href="https://apexcharts.com/react-chart-demos/scatter-charts/">Link to Docs</a>
          </Typography>
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
