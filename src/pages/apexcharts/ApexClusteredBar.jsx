import React from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexClusteredBarChart from '../charts/components/ApexClusteredBarChart/ApexClusteredBarChart';

const row1 = {
  series: [{
    name: 'Series 1',
    data: [20],
  }, {
    name: 'Series 2',
    data: [22],
  }],
  maxValue: 30,
  hPerc: '17',
  xCategory: [2007],
};

const row3 = {
  series: [{
    name: 'Series 1',
    data: [8, 19, 25],
  }, {
    name: 'Series 2',
    data: [12, 20, 35],
  }],
  maxValue: 30,
  hPerc: '40',
  xCategory: [2007, 2008, 2009],
};

const row5 = {
  series: [{
    name: 'Series 1',
    data: [6, 16, 25, 21, 24],
  }, {
    name: 'Series 2',
    data: [4, 13, 21, 26, 28],
  }],
  maxValue: 30,
  hPerc: '70',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const row7 = {
  series: [{
    name: 'Series 1',
    data: [0, 0, 25, 0, 24],
  }, {
    name: 'Series 2',
    data: [0, 0, 21, 23, 28],
  }],
  maxValue: 30,
  hPerc: '90',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const rowNA = {
  series: [],
  maxValue: 30,
  hPerc: '90',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Bar" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredBarChart config={row1} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Bar" variant="apexchart" subtitle="Line with Data Labels">
          <ApexClusteredBarChart config={row3} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Bar" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredBarChart config={row5} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Bar" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredBarChart config={row7} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Bar" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredBarChart config={rowNA} />
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
            <a href="https://apexcharts.com/javascript-chart-demos/bar-charts/">Link to Docs</a>
          </Typography>
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
