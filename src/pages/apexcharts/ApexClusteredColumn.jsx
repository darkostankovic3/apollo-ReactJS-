import React from 'react';

import {
  Grid, Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexClusteredColumnChart from '../charts/components/ApexClusteredColumnChart/ApexClusteredColumnChart';

const row1 = {
  series: [{
    name: 'Series 1',
    data: [20],
  }, {
    name: 'Series 2',
    data: [22],
  }],
  maxValue: 30,
  hPerc: '5',
  xCategory: [2007],
};

const row3 = {
  series: [{
    name: 'Series 1',
    data: [8, 19, 25],
  }, {
    name: 'Series 2',
    data: [12, 20, 28],
  }],
  maxValue: 30,
  hPerc: '18',
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
  hPerc: '28',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const rowZero = {
  series: [{
    name: 'Series 1',
    data: [0, 0, 5, 21, 24],
  }, {
    name: 'Series 2',
    data: [0, 3, 0, 26, 28],
  }],
  maxValue: 30,
  hPerc: '28',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const rowNA = {
  series: [],
  maxValue: 30,
  hPerc: '28',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredColumnChart config={row1} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredColumnChart config={row3} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredColumnChart config={row5} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredColumnChart config={rowZero} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Clustered Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexClusteredColumnChart config={rowNA} />
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
            <a href="https://apexcharts.com/react-chart-demos/column-charts/">Link to Docs</a>
          </Typography>
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
