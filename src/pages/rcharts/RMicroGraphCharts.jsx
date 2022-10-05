import React from 'react';
import { Grid } from '@material-ui/core';

import ExtraLink from '../../utils/ExtraLink';
import MultiMicroAreaChart from '../../components/rcharts/AreaCharts/MultiMicroAreaChart/MultiMicroAreaChart';
import MultiMicroBulletChart from '../../components/rcharts/BarCharts/BulletCharts/MultiMicroBulletChart/MultiMicroBulletChart';
import MultiMicroColumnChart from '../../components/rcharts/ColumnCharts/MultiMicroColumnChart/MultiMicroColumnChart';
import MultiMicroSparklineChart from '../../components/rcharts/LineCharts/MultiMicroSparklineChart/MultiMicroSparklineChart';
import MultiMicroBandedSparklineChart from '../../components/rcharts/LineCharts/MultiMicroBandedSparklineChart/MultiMicroBandedSparklineChart';
import MultiMicroWinLossColumnChart from '../../components/rcharts/ColumnCharts/MultiMicroWinLossColumnChart/MultiMicroWinLossColumnChart';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';
import { heights } from '../../components/rcharts/general/charts.helpers';

function divideIntoQuarters(entryIndex, numberOfEntries) {
  for (let i = 1; i < 5; i += 1) {
    if (entryIndex < ((numberOfEntries / 4) * i)) {
      return i;
    }
  }
  return 1;
}
function createSampleTimebasedMicroData(entries = 4, withEdgeCases = false) {
  const newEntries = new Array(entries).fill(null).map((_x, index) => ({
    value: (index + 1) * 200,
    group: `Q${divideIntoQuarters(index, entries)}`,
  }));

  return withEdgeCases ? newEntries.map((entry) => {
    const zeroValuedEntry = Object.assign(entry, { value: 0 });
    return zeroValuedEntry;
  }) : newEntries;
}

function createMultiSampleTimebasedMicroData(series = 5, entries = 4, withEdgeCases = false) {
  const newSeries = new Array(series).fill(null).map((_x, index) => {
    const entryWithValues = createSampleTimebasedMicroData(entries,
      (withEdgeCases && index === series - 1));
    const entry = {
      label: `Label ${index}`,
      data: entryWithValues,
    };
    return entry;
  });
  return newSeries;
}

function createMultiSampleThreeDataPointMicroData(series = 5, withEdgeCases = false) {
  const newSeries = new Array(series).fill(null).map((_x, index) => {
    const entry = {
      primaryValue: (withEdgeCases && index === series - 1) ? 0 : (index + 1) * 100000,
      secondaryValue: (index + 1) * 100000 - 50000,
      label: `Label ${index}`,
    };
    return entry;
  });
  return newSeries;
}

export default function RMicroGraphCharts() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} s={6} xs={12}>
          <ChartWrapper
            title="Micro Viz - Area"
            subtitle="by 2019 Quarters"
          >
            <MultiMicroAreaChart
              data={(() => {
                const seriesData = createMultiSampleTimebasedMicroData(5, 4, true);
                seriesData[3].data = null;
                return seriesData;
              })()}
              valueKey="value"
              yAxisLabel="label"
              xAxisLabelKey="group"
              height={heights.TABLE}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} s={6} xs={12}>
          <ChartWrapper
            title="Micro Viz - Bullet"
            subtitle="by Percent"
          >
            <MultiMicroBulletChart
              data={(() => {
                const data = createMultiSampleThreeDataPointMicroData(5, true);
                // an example of no data entry
                data[3] = null;
                return data;
              })()}
              yAxisKey="label"
              xAxisPrimaryValueKey="primaryValue"
              xAxisPrimaryLabel="Actual"
              xAxisSecondaryValueKey="secondaryValue"
              xAxisSecondaryLabel="Planned"
              maxValue={500000}
              height={heights.MICROVIZ}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} s={6} xs={12}>
          <ChartWrapper
            title="Micro Viz - Column"
            subtitle="Column data"
          >
            <MultiMicroColumnChart
              data={(() => {
                const data = createMultiSampleTimebasedMicroData(5, 12, true);
                // an example of no data entry
                data[3] = null;
                return data;
              })()}
              valueKey="value"
              yAxisLabel="label"
              xAxisLabelKey="group"
              height={heights.TABLE}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} s={6} xs={12}>
          <ChartWrapper
            title="Micro Viz - Sparkline"
            subtitle="Sparkline data"
          >
            <MultiMicroSparklineChart
              data={(() => {
                const data = createMultiSampleTimebasedMicroData(5, 12, true);
                // an example of no data entry
                data[3] = null;
                return data;
              })()}
              valueKey="value"
              yAxisLabel="label"
              xAxisLabelKey="group"
              height={heights.TABLE}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} s={6} xs={12}>
          <ChartWrapper
            title="Micro Viz - Banded Sparkline"
            subtitle="Sparkline data"
          >
            <MultiMicroBandedSparklineChart
              data={(() => {
                const data = createMultiSampleTimebasedMicroData(5, 12, true);
                // an example of no data entry
                data[3] = null;
                return data;
              })()}
              valueKey="value"
              yAxisLabel="label"
              xAxisLabelKey="group"
              height={heights.TABLE}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} s={6} xs={12}>
          <ChartWrapper
            title="Micro Viz - Column Win/Loss"
            subtitle="Win/Loss highlighted data"
          >
            <MultiMicroWinLossColumnChart
              data={(() => {
                const seriesData = createMultiSampleTimebasedMicroData(5, 12, true);
                const winLossData = seriesData.map((seriesItem) => ({
                  ...seriesItem,
                  data: seriesItem.data.map((item, index) => ({
                    ...item,
                    value: index < 6 ? -1 * item.value : item.value,
                  })),
                }));
                // an example of no data entry
                winLossData[3] = null;
                return winLossData;
              })()}
              valueKey="value"
              yAxisLabel="label"
              xAxisLabelKey="group"
              height={heights.TABLE}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={12} md={12} s={12} xs={12}>
          <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5eea83a8e736354c554f0434" />
        </Grid>
      </Grid>
    </>
  );
}
