import React from 'react';

import { Grid } from '@material-ui/core';
import RMicroColumnChart from '../../../../components/rcharts/ColumnCharts/RMicroColumnChart/RMicroColumnChart';
import { createSampleMicroData } from './logic';
import { heights } from '../../../../components/rcharts/general/charts.helpers';
import KpiWrapper from '../../../../components/rcharts/general/ChartWrappers/KpiWrapper';

const GridItem = ({ children }) => (
  <Grid item lg={4} md={6} s={6} xs={12}>
    {children}
  </Grid>
);

export default function WinLoss() {
  return (
    <>
      <GridItem>
        <KpiWrapper
          title="Micro Viz - Column Win/Loss"
          subtitle="Sales"
        >
          <RMicroColumnChart
            highlightMaxMin
            positiveNegativeHighlight
            data={createSampleMicroData(12).map((item, index) => ({
              ...item,
              value: index < 6 ? -1 * item.value : item.value,
            }))}
            valueKey="value"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="if you leave the title blank, the latest value will be the title"
        >
          <RMicroColumnChart
            highlightMaxMin
            positiveNegativeHighlight
            data={createSampleMicroData(12).map((item, index) => ({
              ...item,
              value: index < 6 ? -1 * item.value : item.value,
            }))}
            valueKey="value"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a banded sparkline chart with no data"
        >
          <RMicroColumnChart
            highlightMaxMin
            positiveNegativeHighlight
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
    </>
  );
}
