import React from 'react';
import { Grid } from '@material-ui/core';

import RColumnChartCard from '../../components/rcharts/ColumnCharts/RColumnChartCard/RColumnChartCard';
import ExtraLink from '../../utils/ExtraLink';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

export function createSampleColumnData(entries = 4, withEdgeCases = false) {
  const newEntries = new Array(entries).fill(null).map((x, index) => ({
    name: `Label ${(index + 1)}`,
    value: (index + 1) * 10000,
    description: `Total sales in 200${(index + 1)}`,
  }));

  return withEdgeCases ? [
    ...[{ name: 'Label ?', value: null, description: 'Description for Label ?' }],
    ...newEntries] : newEntries;
}

export default function RClusterColumnCharts() {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a column chart with one data point."
        >
          <RColumnChartCard
            data={createSampleColumnData(1)}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a column chart with one data point."
        >
          <RColumnChartCard
            data={createSampleColumnData(2)}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a column chart with one data point."
        >
          <RColumnChartCard
            data={createSampleColumnData(3)}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a column chart with one data point."
        >
          <RColumnChartCard
            data={createSampleColumnData(4)}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a column chart with one data point."
        >
          <RColumnChartCard
            data={createSampleColumnData(5)}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a column chart with absolute zero data."
        >
          <RColumnChartCard
            data={createSampleColumnData(3).map((entry) => ({
              ...entry,
              value: 0,
            }))}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a column chart with an unavailable data point."
        >
          <RColumnChartCard
            data={createSampleColumnData(5, true)}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={8} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Column Chart"
          subtitle="Example of a responsive column chart."
        >
          <RColumnChartCard
            data={createSampleColumnData(5, true)}
            xAxisKey="name"
            valueKey="value"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5d44777e5377ca3152f3232e" />
      </Grid>
    </Grid>
  );
}
