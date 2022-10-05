import React from 'react';

import {
  Grid, Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexColumnChart from '../charts/components/ApexColumnChart/ApexColumnChart';

const row1 = {
  series: [{
    name: '',
    data: [22],
  }],
  maxValue: 30,
  hPerc: '3',
  xCategory: ['2007'],
};

const row3 = {
  series: [{
    name: '',
    data: [10, 20, 26],
  }],
  maxValue: 30,
  hPerc: '7',
  xCategory: ['2007', '2008', '2009'],
};

const row5 = {
  series: [{
    name: '',
    data: [7, 10, 15, 26, 29],
  }],
  maxValue: 30,
  hPerc: '13',
  xCategory: ['2007', '2008', '2009', '2010', '2011'],
};

const rowNA = {
  series: [{
    name: '',
    data: [],
  }],
  maxValue: 30,
  hPerc: '13',
  xCategory: ['2007', '2008', '2009', '2010', '2011'],
};

const rowZero = {
  series: [{
    name: '',
    data: [0, 0, 0, 26, 29],
  }],
  maxValue: 30,
  hPerc: '13',
  xCategory: ['2007', '2008', '2009', '2010', '2011'],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Widget title="Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexColumnChart config={row1} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexColumnChart config={row3} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexColumnChart config={row5} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexColumnChart config={rowZero} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexColumnChart config={rowNA} />
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
