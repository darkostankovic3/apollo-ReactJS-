import React from 'react';
import { Grid } from '@material-ui/core';

import ExtraLink from '../../utils/ExtraLink';
import RStackedBarChartCard from '../../components/rcharts/BarCharts/RStackedBarChartCard/RStackedBarChartCard';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

export function createTriadSampleData(entries = 4, isThousands = true, withEdgeCases = false) {
  const newEntries = new Array(entries).fill(null).map((x, index) => ({
    name: `Label ${(index + 1)}`,
    value: isThousands ? (index + 1) * 10000 : (index + 1) * 10,
    description: `Purple description for Label ${(index + 1)}`,
    secondaryValue: isThousands ? (index + 1) * 20000 : (index + 1) * 20,
    secondaryDescription: `Blue description for Label ${(index + 1)}`,
    tertiaryValue: isThousands ? (index + 1) * 15000 : (index + 1) * 15,
    tertiaryDescription: `Orange description for Label ${(index + 1)}`,
  }));

  return withEdgeCases ? [
    ...[{
      name: 'Label ?',
      value: null,
      description: 'Description for Label ?',
      secondaryValue: null,
      secondaryDescription: null,
      tertiaryValue: null,
      tertiaryDescription: null,
    }],
    ...newEntries] : newEntries;
}

export default function RStackedBarCharts() {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a stacked bar chart with one data point."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(1)}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a stacked bar chart with two data points."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(2)}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a stacked bar chart with three data points."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(3)}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a stacked bar chart with four data points."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(4)}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a stacked bar chart with five data points."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(5)}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a stacked bar chart with zero value data points."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(4).map((item) => ({
              ...item,
              value: null,
              secondaryValue: null,
              tertiaryValue: null,
            }))}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a stacked bar chart with unavailable data points."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(4).map((item) => ({
              ...item,
              value: 0,
              secondaryValue: 0,
              tertiaryValue: 0,
            }))}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={8} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Stacked Bar Chart"
          subtitle="Example of a responsive stacked bar chart."
        >
          <RStackedBarChartCard
            data={createTriadSampleData(5)}
            yAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            tertiaryLabel="Tertiary Value"
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            xAxisTertiaryValueKey="tertiaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
            tertiaryValueDescriptionKey="tertiaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5ef121612e280d27997a1554" />
      </Grid>
    </Grid>
  );
}
