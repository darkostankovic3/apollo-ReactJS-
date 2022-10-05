import React from 'react';
import { Grid } from '@material-ui/core';

import RScatterChartCard from '../../components/rcharts/ScatterCharts/RScatterChartCard';
import ExtraLink from '../../utils/ExtraLink';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

function makeFakeChartValue(index, frequency, max = 50000) {
  const amplitude = max / 2; // amplitude is how far away from the base line a sine wave can get
  const offset = max / 2; // where the base line is
  // frequency how left-to-right squished the data is.
  const result = (amplitude * Math.sin(frequency * (index))) + offset;
  return Math.floor(result);
}

function createSampleData(series = 2, entries = 4) {
  return new Array(entries).fill(null).map((x, index) => {
    const isFirstGroup = index % series === 0;
    return {
      group: isFirstGroup ? 'Normal' : 'Outliers',
      xValue: makeFakeChartValue(
        isFirstGroup ? 1 : 2,
        (index + 1),
      ),
      yValue: makeFakeChartValue(
        isFirstGroup ? 2 : 3,
        (index + 1),
      ),
      description: `Description for entry ${(index + 1)}`,
    };
  });
}

export default function RScatterCharts() {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Scatter Chart"
          subtitle="Example of a scatter chart with two series."
        >
          <RScatterChartCard
            data={createSampleData(2, 30)}
            groupKey="group"
            xValueKey="xValue"
            yValueKey="yValue"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Scatter Chart"
          subtitle="Example of a scatter chart with one series."
        >
          <RScatterChartCard
            data={createSampleData(1, 30)}
            groupKey="group"
            xValueKey="xValue"
            yValueKey="yValue"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Scatter Chart"
          subtitle="Example of a scatter chart with no value."
        >
          <RScatterChartCard
            data={null}
            groupKey="group"
            xValueKey="xValue"
            yValueKey="yValue"
            valueDescriptionKey="description"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5ef144d5199b1b4608877ae1" />
      </Grid>
    </Grid>
  );
}
