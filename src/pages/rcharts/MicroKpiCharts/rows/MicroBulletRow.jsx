import React from 'react';

import { Grid } from '@material-ui/core';
import KpiWrapper from '../../../../components/rcharts/general/ChartWrappers/KpiWrapper';
import RMicroBulletChart from '../../../../components/rcharts/BarCharts/BulletCharts/RMicroBulletChart/RMicroBulletChart';
import { heights } from '../../../../components/rcharts/general/charts.helpers';

const GridItem = ({ children }) => (
  <Grid item lg={4} md={6} s={6} xs={12}>
    {children}
  </Grid>
);

export default function Bullet() {
  return (
    <>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro visualization bullet chart"
        >
          <RMicroBulletChart
            primaryLabel="Actual"
            secondaryLabel="Planned"
            data={[{
              primaryValue: 80,
              secondaryValue: 50,
              maxValue: 100,
            }]}
            valueKey="primaryValue"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro visualization bullet chart"
        >
          <RMicroBulletChart
            primaryLabel="Actual"
            secondaryLabel="Planned"
            data={[{
              primaryValue: 0,
              secondaryValue: 50,
              maxValue: 100,
            }]}
            valueKey="primaryValue"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
      <GridItem>
        <KpiWrapper
          subtitle="Example of a micro visualization bullet chart"
        >
          <RMicroBulletChart
            primaryLabel="Actual"
            secondaryLabel="Planned"
            height={heights.KPI}
          />
        </KpiWrapper>
      </GridItem>
    </>
  );
}
