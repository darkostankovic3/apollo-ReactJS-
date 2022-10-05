import { Grid } from '@material-ui/core';
import React from 'react';

import RMicroAreaChart from '../../../../components/rcharts/AreaCharts/RMicroAreaChart/RMicroAreaChart';
import { heights } from '../../../../components/rcharts/general/charts.helpers';
import KpiWrapper from '../../../../components/rcharts/general/ChartWrappers/KpiWrapper';
import { createSampleMicroData } from './logic';

const GridItem = ({ children }) => (
  <Grid item lg={4} md={6} s={6} xs={12}>
    {children}
  </Grid>
);

export default function Area() {
  return (
    <>
      <GridItem>
        <KpiWrapper
          title="Micro Viz - Area"
          subtitle="Example of a micro visualization compilation"
        >
          <RMicroAreaChart
            height={heights.KPI}
            data={createSampleMicroData(10)}
            valueKey="value"
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro visualization compilation"
        >
          <RMicroAreaChart
            height={heights.KPI}
            data={createSampleMicroData(10, true)}
            valueKey="value"
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro visualization compilation"
        >
          <RMicroAreaChart
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
    </>
  );
}
