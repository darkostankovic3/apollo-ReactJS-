import React from 'react';

import {
  Grid, Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexStackedColumn from '../charts/components/ApexStackedColumn/ApexStackedColumn';

const row1 = {
  series: [{
    name: 'Series 3',
    data: [12],
  }, {
    name: 'Series 4',
    data: [9],
  }, {
    name: 'Series 5',
    data: [25],
  }],
  maxValue: 30,
  hPerc: '3',
  xCategory: [2007],
};

const row3 = {
  series: [{
    name: 'Series 3',
    data: [12, 17, 11],
  }, {
    name: 'Series 4',
    data: [9, 7, 5],
  }, {
    name: 'Series 5',
    data: [25, 12, 19],
  }],
  maxValue: 33,
  hPerc: '10',
  xCategory: [2007, 2008, 2009],
};

const row5 = {
  series: [{
    name: 'Series 3',
    data: [12, 17, 11, 19, 23],
  }, {
    name: 'Series 4',
    data: [9, 7, 5, 23, 89],
  }, {
    name: 'Series 5',
    data: [25, 12, 19, 18, 13],
  }],
  maxValue: 19,
  hPerc: '20',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const row5all = {
  series: [{
    name: 'Series 3',
    data: [12, 17, 11, 19, 23],
  }, {
    name: 'Series 4',
    data: [9, 7, 5, 23, 89],
  }, {
    name: 'Series 5',
    data: [25, 12, 19, 18, 13],
  }, {
    name: 'Series 4',
    data: [9, 7, 5, 23, 89],
  }, {
    name: 'Series 5',
    data: [25, 12, 19, 18, 13],
  }],
  maxValue: 19,
  hPerc: '20',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const rowNA = {
  series: [{
    name: 'Series 3',
    data: [0, 0, 0, 0, 0],
  }, {
    name: 'Series 4',
    data: [0, 7, 5, 23, 89],
  }, {
    name: 'Series 5',
    data: [0, 12, 19, 18, 13],
  }, {
    name: 'Series 4',
    data: [0, 7, 5, 23, 89],
  }, {
    name: 'Series 5',
    data: [0, 12, 19, 18, 13],
  }],
  maxValue: 19,
  hPerc: '20',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const rowNoData = {
  series: [],
  maxValue: 19,
  hPerc: '20',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Widget title="Apex Stacked Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexStackedColumn config={row1} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Apex Stacked Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexStackedColumn config={row3} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Apex Stacked Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexStackedColumn config={row5} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Apex Stacked Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexStackedColumn config={row5all} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Apex Stacked Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexStackedColumn config={rowNA} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Apex Stacked Column" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexStackedColumn config={rowNoData} />
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
