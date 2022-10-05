import React from 'react';
import { Grid } from '@material-ui/core';

import ExtraLink from '../../utils/ExtraLink';

import ReChartsDonutCard from '../../components/rcharts/DonutCharts/ReChartsDonutCard/ReChartsDonutCard';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

export default function RDonutCharts() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Donut Chart Absolute Zero"
            subtitle="This chart can have virtually any number of data series and data points."
          >
            <ReChartsDonutCard
              label="Label"
              value={0}
              percent={0}
              description="Total sales in 2018"
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Donut Chart 1%"
            subtitle="This chart can have virtually any number of data series and data points."
          >
            <ReChartsDonutCard
              label="Label"
              value={0.25}
              percent={1}
              description="Total sales in 2018"
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Donut Chart 50%"
            subtitle="This chart can have virtually any number of data series and data points."
          >
            <ReChartsDonutCard
              label="Label"
              value={41000}
              percent={50}
              description="Total sales in 2018"
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Donut Chart 100%"
            subtitle="This chart can have virtually any number of data series and data points."
          >
            <ReChartsDonutCard
              label="Label"
              value={82000}
              percent={100}
              description="Total sales in 2018"
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Donut Chart data not available"
            subtitle="This chart can have virtually any number of data series and data points."
          >
            <ReChartsDonutCard
              label="Label"
              value={null}
              percent={null}
              description="Total sales in 2018"
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={12} md={12} s={12} xs={12}>
          <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5c93c420d154600581d2905a" />
        </Grid>
      </Grid>
    </>
  );
}
