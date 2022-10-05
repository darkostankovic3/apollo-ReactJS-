import React from 'react';
import { Grid } from '@material-ui/core';

import Table from '../../tables/components/Table/Table';
import RMicroAreaChart from '../../../components/rcharts/AreaCharts/RMicroAreaChart/RMicroAreaChart';
import RMicroColumnChart from '../../../components/rcharts/ColumnCharts/RMicroColumnChart/RMicroColumnChart';
import RMicroDonutChart from '../../../components/rcharts/DonutCharts/RMicroDonutChart/RMicroDonutChart';
import RMicroSparklineChart from '../../../components/rcharts/LineCharts/RMicroSparklineChart/RMicroSparklineChart';
import RMicroBulletChart from '../../../components/rcharts/BarCharts/BulletCharts/RMicroBulletChart/RMicroBulletChart';
import ExtraLink from '../../../utils/ExtraLink';
import useStyles from './RMicroTableCharts.styles';
import { heights } from '../../../components/rcharts/general/charts.helpers';

function createSampleMicroData(entries = 4) {
  return new Array(entries).fill(null).map((_x, index) => ({
    value: (index + 1) * 200,
  }));
}

export default function RMicroTableCharts() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <Table
          rowsPerPage={5}
          title="Chicago's Taxi Trips Have Been on a Steady Decline"
          subtitle="A closer look at the top 5 areas confirms taxis are suffering across the board"
          columns={[
            { name: 'area', title: 'Area Name', type: 'string' },
            { name: 'sparkline', title: 'Micro Viz - Sparkline', type: 'function' },
            { name: 'month', title: 'Latest Month', type: 'number' },
            { name: 'monthPY', title: 'vs Same Month PY Month', type: 'number' },
            { name: 'year', title: 'Latest Yr Trips', type: 'number' },
            { name: 'yearPY', title: 'vs. PY', type: 'number' },
            { name: 'bullet', title: 'Micro Viz - Bullet', type: 'function' },
          ]}
          data={
            [
              {
                area: 'Near North Side',
                sparkline: (
                  <RMicroSparklineChart
                    data={createSampleMicroData(5)}
                    valueKey="value"
                    height={heights.TABLE}
                  />),
                month: '418,986',
                monthPY: (<p className={classes.negative}>-30.0%</p>),
                year: '5,908.758',
                yearPY: (<p className={classes.negative}>-24.2%</p>),
                bullet: (<RMicroBulletChart
                  primaryLabel="Actual"
                  secondaryLabel="Planned"
                  data={[{
                    primaryValue: 50,
                    secondaryValue: 80,
                    maxValue: 100,
                  }]}
                  valueKey="primaryValue"
                  showLegend={false}
                  height={heights.TABLE}
                />),
              },
              {
                area: 'Loop',
                sparkline: (
                  <RMicroSparklineChart
                    data={createSampleMicroData(5)}
                    valueKey="value"
                    height={heights.TABLE}
                  />),
                month: '305,562',
                monthPY: (<p className={classes.negative}>-23.7%</p>),
                year: '4,288.823',
                yearPY: (<p className={classes.negative}>-17.5%</p>),
                bullet: (<RMicroBulletChart
                  data={[{
                    primaryValue: 50,
                    secondaryValue: 80,
                    maxValue: 100,
                  }]}
                  valueKey="primaryValue"
                  showLegend={false}
                  height={heights.TABLE}
                />),
              },
              {
                area: 'Near West Side',
                sparkline: (
                  <RMicroSparklineChart
                    data={createSampleMicroData(5)}
                    valueKey="value"
                    height={heights.TABLE}
                  />),
                month: '119,817',
                monthPY: (<p className={classes.negative}>-26.5%</p>),
                year: '1,580.838',
                yearPY: (<p className={classes.negative}>-23.7%</p>),
                bullet: (<RMicroBulletChart
                  data={[{
                    primaryValue: 50,
                    secondaryValue: 80,
                    maxValue: 100,
                  }]}
                  valueKey="primaryValue"
                  showLegend={false}
                  height={heights.TABLE}
                />),
              },
              {
                area: 'Ohare',
                sparkline: (
                  <RMicroSparklineChart
                    data={null}
                    valueKey="value"
                    height={heights.TABLE}
                  />),
                month: '64,553',
                monthPY: (<p className={classes.negative}>-28.0%</p>),
                year: '1,230.250',
                yearPY: (<p className={classes.negative}>-20.2%</p>),
                bullet: (<RMicroBulletChart
                  showLegend={false}
                  height={heights.TABLE}
                />),
              },
              {
                area: 'Lincoln Park',
                sparkline: (
                  <RMicroSparklineChart
                    data={createSampleMicroData(5).map((item) => ({ ...item, value: 0 }))}
                    valueKey="value"
                    height={heights.TABLE}
                  />),
                month: '47,110',
                monthPY: (<p className={classes.negative}>-48.4%</p>),
                year: '951,807',
                yearPY: (<p className={classes.negative}>-38.5%</p>),
                bullet: (<RMicroBulletChart
                  data={[{
                    primaryValue: 0,
                    secondaryValue: 80,
                    maxValue: 100,
                  }]}
                  valueKey="primaryValue"
                  showLegend={false}
                  height={heights.TABLE}
                />),
              },
            ]
          }
        />
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <Table
          rowsPerPage={5}
          title="Title Goes Here"
          subtitle="Sub title goes here"
          columns={[
            { name: 'area', title: 'Micro Viz - Area', type: 'function' },
            { name: 'columnMinMax', title: 'Micro Viz - Column w/ Min & Max', type: 'function' },
            { name: 'donut', title: 'Micro Viz - Donut', type: 'function' },
            { name: 'banded', title: 'Micro Viz - Banded Sparkline', type: 'function' },
            { name: 'columnWinLoss', title: 'Micro Viz - Column Win/Loss', type: 'function' },
          ]}
          data={[
            {
              area: (
                <RMicroAreaChart
                  data={createSampleMicroData(10)}
                  valueKey="value"
                  height={heights.TABLE}
                />
              ),
              columnMinMax: (<RMicroColumnChart
                data={createSampleMicroData(12)}
                valueKey="value"
                height={heights.TABLE}
                highlightMaxMin
              />),
              donut: (
                <RMicroDonutChart
                  data={[{
                    percent: 75,
                  }]}
                  valueKey="percent"
                  height={heights.TABLE}
                />
              ),
              banded: (
                <RMicroSparklineChart
                  data={createSampleMicroData(30)}
                  valueKey="value"
                  isBanded
                  height={heights.TABLE}
                />
              ),
              columnWinLoss: (
                <RMicroColumnChart
                  data={createSampleMicroData(12).map((item, index) => ({
                    ...item,
                    value: index < 6 ? -1 * item.value : item.value,
                  }))}
                  valueKey="value"
                  height={heights.TABLE}
                  highlightMaxMin={false}
                  positiveNegativeHighlight
                />
              ),
            },
            {
              area: (<RMicroAreaChart
                data={null}
                height={heights.TABLE}
              />),
              columnMinMax: (<RMicroColumnChart
                data={null}
                height={heights.TABLE}
                highlightMaxMin
              />),
              donut: (
                <RMicroDonutChart
                  height={heights.TABLE}
                />
              ),
              banded: (
                <RMicroSparklineChart
                  data={null}
                  isBanded
                  height={heights.TABLE}
                />
              ),
              columnWinLoss: (
                <RMicroColumnChart
                  data={null}
                  height={heights.TABLE}
                  highlightMaxMin={false}
                  positiveNegativeHighlight
                />
              ),
            },
            {
              area: (<RMicroAreaChart
                data={createSampleMicroData(10).map((item) => ({ ...item, value: 0 }))}
                valueKey="value"
                height={heights.TABLE}
              />),
              columnMinMax: (<RMicroColumnChart
                data={createSampleMicroData(12).map((item) => ({ ...item, value: 0 }))}
                valueKey="value"
                height={heights.TABLE}
                highlightMaxMin
              />),
              donut: (
                <RMicroDonutChart
                  data={[{
                    percent: 0,
                  }]}
                  valueKey="percent"
                  height={heights.TABLE}
                />
              ),
              banded: (
                <RMicroSparklineChart
                  data={createSampleMicroData(30).map((item) => ({ ...item, value: 0 }))}
                  valueKey="value"
                  isBanded
                  bandMidway={0}
                  height={heights.TABLE}
                />
              ),
              columnWinLoss: (
                <RMicroColumnChart
                  data={createSampleMicroData(12).map((item) => ({
                    ...item,
                    value: 0,
                  }))}
                  valueKey="value"
                  height={heights.TABLE}
                  highlightMaxMin={false}
                  positiveNegativeHighlight
                />
              ),
            },
          ]}
        />
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5ee7bc44d949a798a112be33" />
      </Grid>
    </Grid>
  );
}
