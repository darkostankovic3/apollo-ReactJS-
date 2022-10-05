import { Grid } from '@material-ui/core';
import React from 'react';
import { heights } from '../../../../components/rcharts/general/charts.helpers';
import KpiWrapper from '../../../../components/rcharts/general/ChartWrappers/KpiWrapper';

import RMicroSparklineChart from '../../../../components/rcharts/LineCharts/RMicroSparklineChart/RMicroSparklineChart';
import { createSampleMicroData } from './logic';

const GridItem = ({ children }) => (
  <Grid item lg={4} md={6} s={6} xs={12}>
    {children}
  </Grid>
);

export default function Line() {
  return (
    <>
      <GridItem>
        <KpiWrapper
          title="Micro Viz - Sparkline"
          subtitle="Example of a sparkline chart"
        >
          <RMicroSparklineChart
            data={createSampleMicroData(30)}
            valueKey="value"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a sparkline chart with all zero values"
        >
          <RMicroSparklineChart
            data={createSampleMicroData(30, true)}
            valueKey="value"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a sparkline chart with no data"
        >
          <RMicroSparklineChart
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
    </>
  );
}
