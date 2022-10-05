import React from 'react';
import { Grid } from '@material-ui/core';

import RClusterColumnChartCard from '../../components/rcharts/ColumnCharts/RClusterColumnChartCard/RClusterColumnChartCard';
import ExtraLink from '../../utils/ExtraLink';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

export function createDualSampleData(entries = 4, isThousands = false, withEdgeCases = false) {
  const newEntries = new Array(entries).fill(null).map((_x, index) => ({
    name: `Label ${(index + 1)}`,
    value: isThousands ? (index + 1) * 10000 : (index + 1) * 10,
    description: `Purple description for Label ${(index + 1)}`,
    secondaryValue: isThousands ? (index + 1) * 20000 : (index + 1) * 20,
    secondaryDescription: `Blue description for Label ${(index + 1)}`,
  }));

  return withEdgeCases ? [
    ...[{
      name: 'Label ?',
      value: null,
      description: 'Description for Label ?',
      secondaryValue: null,
      secondaryDescription: null,
    }],
    ...newEntries] : newEntries;
}

export default function RClusterColumnCharts() {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a cluster chart with one data point."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(1, true)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a cluster chart with two data points."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(2, true)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a cluster chart with three data points."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(3, true)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a cluster chart with four data points."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(4, true)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a cluster chart with five data points."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(5, true)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a cluster chart with absolute zero data."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(5, true).map((entry) => ({
              ...entry,
              value: 0,
              secondaryValue: 0,
            }))}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a cluster chart with an unavailable data point."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(5, true, true)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={8} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Cluster Column Chart"
          subtitle="Example of a responsive cluster chart."
        >
          <RClusterColumnChartCard
            data={createDualSampleData(5, true)}
            xAxisKey="name"
            primaryLabel="Value"
            secondaryLabel="Secondary Value"
            yAxisPrimaryValueKey="value"
            yAxisSecondaryValueKey="secondaryValue"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5c92b872ca007d05b86d244f" />
      </Grid>
    </Grid>
  );
}
