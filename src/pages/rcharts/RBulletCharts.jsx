import React from 'react';
import { Grid } from '@material-ui/core';

import RBulletChartCard from '../../components/rcharts/BarCharts/BulletCharts/RBulletChartCard/RBulletChartCard';
import ExtraLink from '../../utils/ExtraLink';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

export function createDualSampleData(entries = 4, isThousands = false, withEdgeCases = false) {
  const newEntries = new Array(entries).fill(null).map((_x, index) => ({
    name: `Label ${(index + 1)}`,
    value: isThousands ? (index + 1) * 10000 : (index + 1) * 10,
    description: `Purple description for Label ${(index + 1)}`,
    secondaryValue: isThousands ? (index + 1) * 20000 : (index + 1) * 20,
    secondaryDescription: `Gray description for Label ${(index + 1)}`,
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

export default function RBulletCharts() {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a bullet chart with one data point."
        >
          <RBulletChartCard
            data={createDualSampleData(1)}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a bullet chart with two data points."
        >
          <RBulletChartCard
            data={createDualSampleData(2)}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a bullet chart with three data points."
        >
          <RBulletChartCard
            data={createDualSampleData(3)}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a bullet chart with four data points."
        >
          <RBulletChartCard
            data={createDualSampleData(4)}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a bullet chart with five data points."
        >
          <RBulletChartCard
            data={createDualSampleData(5)}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a bullet chart with absolute zero data."
        >
          <RBulletChartCard
            data={createDualSampleData(3).map((entry) => ({
              ...entry,
              value: 0,
              secondaryValue: 0,
            }))}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={4} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a bullet chart with an unavailable data point."
        >
          <RBulletChartCard
            data={createDualSampleData(4, false, true)}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={8} md={6} s={6} xs={12}>
        <ChartWrapper
          title="Bullet Chart"
          subtitle="Example of a responsive bullet chart."
        >
          <RBulletChartCard
            data={createDualSampleData(5)}
            xAxisPrimaryValueKey="value"
            xAxisSecondaryValueKey="secondaryValue"
            yAxisKey="name"
            primaryValueDescriptionKey="description"
            secondaryValueDescriptionKey="secondaryDescription"
          />
        </ChartWrapper>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5c93dff9cd3bad25131d4ad1" />
      </Grid>
    </Grid>
  );
}
