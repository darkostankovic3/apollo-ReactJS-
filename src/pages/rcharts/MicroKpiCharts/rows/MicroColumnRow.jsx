import { Grid } from '@material-ui/core';
import React from 'react';

import RMicroColumnChart from '../../../../components/rcharts/ColumnCharts/RMicroColumnChart/RMicroColumnChart';
import { heights } from '../../../../components/rcharts/general/charts.helpers';
import KpiWrapper from '../../../../components/rcharts/general/ChartWrappers/KpiWrapper';
import { createSampleMicroData } from './logic';

const GridItem = ({ children }) => (
  <Grid item lg={4} md={6} s={6} xs={12}>
    {children}
  </Grid>
);

export default function Column() {
  return (
    <>
      <GridItem>
        <KpiWrapper
          title="Micro Viz - Column w/ Min & Max"
          subtitle="Sales"
        >
          <RMicroColumnChart
            data={createSampleMicroData(12)}
            highlightMaxMin
            valueKey="value"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="if the title is blank, the latest value will be the title"
        >
          <RMicroColumnChart
            highlightMaxMin
            data={createSampleMicroData(12)}
            valueKey="value"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro column chart with no data"
        >
          <RMicroColumnChart
            highlightMaxMin
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
    </>
  );
}
