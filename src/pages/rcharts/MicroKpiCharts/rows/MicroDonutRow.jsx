import { Grid } from '@material-ui/core';
import React from 'react';

import RMicroDonutChart from '../../../../components/rcharts/DonutCharts/RMicroDonutChart/RMicroDonutChart';
import { heights } from '../../../../components/rcharts/general/charts.helpers';
import KpiWrapper from '../../../../components/rcharts/general/ChartWrappers/KpiWrapper';

const GridItem = ({ children }) => (
  <Grid item lg={4} md={6} s={6} xs={12}>
    {children}
  </Grid>
);

export default function Donut() {
  return (
    <>
      <GridItem>
        <KpiWrapper
          title="Micro Viz - Donut"
          subtitle="Example of a micro donut chart"
        >
          <RMicroDonutChart
            data={[{
              percent: 50,
            }]}
            valueKey="percent"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro donut chart"
        >
          <RMicroDonutChart
            data={[{
              percent: 0,
            }]}
            valueKey="percent"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro donut chart with no data"
        >
          <RMicroDonutChart
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
    </>
  );
}
