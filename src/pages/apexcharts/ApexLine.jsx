import React from 'react';

import {
  Grid, Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexLineChart from '../charts/components/ApexLineChart/ApexLineChart';

const line3 = {
  series: [
    {
      name: 'Signed',
      data: [31, 40, 28],
    },
    {
      name: 'Unsigned',
      data: [11, 32, 45],
    },
    {
      name: 'Overdue',
      data: [1, 52, 45],
    },
  ],
  xCategory: ['Label', 'Label', 'Label'],
};

const line3zero = {
  series: [
    {
      name: 'Signed',
      data: [90, 132, 143],
      type: 'scatter',
    },
    {
      name: 'Unsigned',
      data: [11, 32, 45],
      type: 'line',
    },
    {
      name: 'Overdue',
      data: [1, 52, 45],
      type: 'line',
    },
  ],
  xCategory: ['Label', 'Label', 'Label'],
};

const line3full = {
  series: [
    {
      name: 'Signed',
      data: [31, 40, 28, 51, 42],
    },
    {
      name: 'Unsigned',
      data: [11, 32, 45, 32, 34],
    },
    {
      name: 'Overdue',
      data: [0, 0, 0, 0, 0],
    },
  ],
  xCategory: ['Label', 'Label', 'Label', 'Label', 'Label'],
};

const lineNA = {
  series: [],
  xCategory: ['Label', 'Label', 'Label', 'Label', 'Label'],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Widget variant="apexchart" title="Apex Line Chart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexLineChart config={line3} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget variant="apexchart" title="Apex Line and Scatter Mixed Chart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexLineChart config={line3zero} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget variant="apexchart" title="Apex Line Chart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexLineChart config={line3full} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget variant="apexchart" title="Apex Line Chart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexLineChart config={lineNA} />
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
            <a href="https://apexcharts.com/react-chart-demos/line-charts/">Link to Docs</a>
          </Typography>
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
