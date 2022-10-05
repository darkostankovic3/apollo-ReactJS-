import React from 'react';
import { Grid } from '@material-ui/core';

import RBarChartCard from '../../components/rcharts/BarCharts/RBarChartCard/RBarChartCard';
import ExtraLink from '../../utils/ExtraLink';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

function createSampleStandardBarData(entries = 4, withEdgeCases = false) {
  const newEntries = new Array(entries).fill(null).map((x, index) => ({
    name: `Label ${index + 1}`,
    description: `Description for Label ${index + 1}`,
    percent: (index + 1) * 20,
    value: (index + 1) * 200,
  }));

  return withEdgeCases ? [
    ...[{
      name: 'Label NA',
      description: 'Description for Label ?',
      percent: null,
      value: null,
    }],
    ...newEntries] : newEntries;
}

export default function RBarCharts() {
  return (
    <Grid container spacing={6}>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with one data point."
        >
          <RBarChartCard
            data={createSampleStandardBarData(1)}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with two data points."
        >
          <RBarChartCard
            data={createSampleStandardBarData(2)}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with three data points."
        >
          <RBarChartCard
            data={createSampleStandardBarData(3)}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with four data points."
        >
          <RBarChartCard
            data={createSampleStandardBarData(4)}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with five data points."
        >
          <RBarChartCard
            data={createSampleStandardBarData(5)}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with absolute zero data points."
        >
          <RBarChartCard
            data={createSampleStandardBarData(3).map((entry) => ({
              ...entry,
              value: 0,
              percent: 0,
            }))}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with an undefined data point."
        >
          <RBarChartCard
            data={createSampleStandardBarData(2, true)}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={8} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Standard Bar Chart"
          subtitle="Example of a standard bar chart with responsive width."
        >
          <RBarChartCard
            data={createSampleStandardBarData(5)}
            xAxisValueKey="percent"
            valueKey="value"
            valueDescriptionKey="description"
            yAxisKey="name"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5c941157b533f7064cc05058" />
      </Grid>
    </Grid>
  );
}
