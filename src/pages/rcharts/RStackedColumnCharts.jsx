import React from 'react';
import { Grid } from '@material-ui/core';

import RStackedColumnChartCard from '../../components/rcharts/ColumnCharts/RStackedColumnChartCard/RStackedColumnChartCard';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';
import ExtraLink from '../../utils/ExtraLink';

export function createTriadSampleData(entries = 4) {
  return new Array(entries).fill(null).map((x, index) => ({
    name: `Label ${(index + 1)}`,
    value: (index + 1) * 10000,
    description: `Purple description for Label ${(index + 1)}`,
    secondaryValue: (index + 1) * 20000,
    secondaryDescription: `Blue description for Label ${(index + 1)}`,
    tertiaryValue: (index + 1) * 15000,
    tertiaryDescription: `Orange description for Label ${(index + 1)}`,
  }));
}

export default function RStackedColumnCharts() {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a stacked bar chart with one data point."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(1)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a stacked bar chart with two data points."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(2)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a stacked bar chart with three data points."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(3)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a stacked bar chart with four data points."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(4)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a stacked bar chart with five data points."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(5)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a stacked column chart with zero value data points."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(4).map((item) => ({
              ...item,
              value: null,
              secondaryValue: null,
              tertiaryValue: null,
            }))}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a stacked column chart with unavailable data points."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(4).map((item) => ({
              ...item,
              value: 0,
              secondaryValue: 0,
              tertiaryValue: 0,
            }))}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={8} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Column Chart"
          subtitle="Example of a responsive stacked column chart."
        >
          <RStackedColumnChartCard
            data={createTriadSampleData(5)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            yAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5ef12919b9a25d2ae4b048ea" />
      </Grid>
    </Grid>
  );
}
