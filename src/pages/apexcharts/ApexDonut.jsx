import React from 'react';

import {
  Grid, Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';

import ApexDonutChart from '../charts/components/ApexDonutChart/ApexUpdateDonut';

const noData = {
  series: [],
};
const zeroData = {
  series: [0],
};
const oneData = {
  series: [1],
};
const fiftyData = {
  series: [50],
};
const allData = {
  series: [100],
};

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="Zero Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={zeroData} />
        </Widget>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="Zero Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={zeroData} />
        </Widget>
      </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="1% Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={oneData} />
        </Widget>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="1% Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={oneData} />
        </Widget>
      </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="50% Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={fiftyData} />
        </Widget>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="50% Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={fiftyData} />
        </Widget>
      </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="100% Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={allData} />
        </Widget>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="100% Value"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={allData} />
        </Widget>
      </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="Unable to load Data"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={noData} />
        </Widget>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <Widget
          title="Unable to load Data"
          subtitle="Subscript goes here"
          variant="table"
          noBodyPadding
        >
          <ApexDonutChart config={noData} />
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
            <a href="https://apexcharts.com/react-chart-demos/pie-charts/">Link to Docs on Donut</a>
            <br />
            <a href="https://apexcharts.com/react-chart-demos/radialbar-charts/">More Docs on Radialbar</a>
          </Typography>
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
