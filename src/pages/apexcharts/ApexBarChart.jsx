import React from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexBarChart from '../charts/components/ApexBarChart/ApexBarChart';

const row1 = {
  series: [{
    name: '',
    data: [22],
  }],
  maxValue: 30,
  hPerc: '8',
  xCategory: [2007],
};

const row3 = {
  series: [{
    name: '',
    data: [10, 20, 26],
  }],
  maxValue: 30,
  hPerc: '24',
  xCategory: [2007, 2008, 2009],
};

const row5 = {
  series: [{
    name: '',
    data: [2, 11, 15, 26],
  }],
  maxValue: 30,
  hPerc: '31',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const row7 = {
  series: [{
    name: '',
    data: [10, 0, 20, 0],
  }],
  maxValue: 30,
  hPerc: '30',
  xCategory: [2007, 2008, 2009, 2010],
};

const rowNA = {
  series: [{
    name: '',
    data: [],
  }],
  maxValue: 30,
  hPerc: '30',
  xCategory: [2007, 2008, 2009, 2010],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Widget title="Bar Chart" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexBarChart mData={row1.series} mMaxValue={row1.maxValue} mPerc={row1.hPerc} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Bar Chart" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexBarChart mData={row3.series} mMaxValue={row3.maxValue} mPerc={row3.hPerc} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Bar Chart" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexBarChart mData={row5.series} mMaxValue={row5.maxValue} mPerc={row5.hPerc} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Bar Chart" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexBarChart mData={row7.series} mMaxValue={row7.maxValue} mPerc={row7.hPerc} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget title="Bar Chart" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexBarChart mData={rowNA.series} mMaxValue={rowNA.maxValue} mPerc={rowNA.hPerc} />
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
