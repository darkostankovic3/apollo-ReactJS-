import React from 'react';
import { Grid, useTheme } from '@material-ui/core';

import ExtraLink from '../../utils/ExtraLink';
import RLineChartCard from '../../components/rcharts/LineCharts/RLineChartCard/RLineChartCard';
import ChartWrapper from '../../components/rcharts/general/ChartWrappers/ChartWrapper';

function makeFakeChartValue(index, frequency, max = 50000) {
  const amplitude = max / 2; // amplitude is how far away from the base line a sine wave can get
  const offset = max / 2; // where the base line is
  // frequency how left-to-right squished the data is.
  const result = (amplitude * Math.sin(frequency * (index))) + offset;
  return Math.floor(result);
}

/**
 * Data must be in the form:
 * [{name: 'Data Point Name', data: [...]}]
 * where data has the data for each entry with
 * {xAxisLabel: 'Label Name', value: 10000, description: 'description'}
 */
function createSampleData(theme, dataPoints = 3, entries = 4, max = 50000, withEdgeCases = false) {
  const seriesData = new Array(dataPoints).fill(null).map((x, dataPointIndex) => ({
    dataPoint: `DataPoint ${dataPointIndex + 1}`,
    data: new Array(entries).fill(null).map((_x, entryIndex) => {
      const value = makeFakeChartValue(entryIndex + 1, dataPointIndex + 1, max);
      return {
        name: `Label ${entryIndex}`,
        value,
        description: `Description for Data Point ${dataPointIndex} Label ${entryIndex}`,
      };
    }),
    color: theme.palette[`colorDataViz${dataPointIndex + 1}`].main,
  }));
  if (withEdgeCases) {
    seriesData[0].data.map((entry) => {
      // eslint-disable-next-line no-param-reassign
      entry.value = null;
      return entry;
    });
  }
  return seriesData;
}

export default function RLineCharts() {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Line Chart"
            subtitle="Example of a line chart with three data points."
          >
            <RLineChartCard
              data={createSampleData(theme, 3, 3, 45000)}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Line Chart"
            subtitle="Example of a line chart with four data points."
          >
            <RLineChartCard
              data={createSampleData(theme, 3, 4, 45000)}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Line Chart"
            subtitle="Example of a line chart with five data points."
          >
            <RLineChartCard
              data={createSampleData(theme, 3, 5, 45000)}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Line Chart"
            subtitle="Example of a line chart with absolute zero data."
          >
            <RLineChartCard
              data={(() => {
                const data = createSampleData(theme, 3, 4, 45000);
                data[0].data = data[0].data.map((item) => {
                  const zeroItem = Object.assign(item, { value: 0 });
                  return zeroItem;
                });
                return data;
              })()}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Line Chart"
            subtitle="Example of a line chart with an unavailable data point."
          >
            <RLineChartCard
              data={createSampleData(theme, 3, 4, 45000, true)}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ChartWrapper
            title="Line Chart"
            subtitle="Example of a line chart with eleven data points."
          >
            <RLineChartCard
              data={createSampleData(theme, 3, 11, 95000)}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={12} md={12} s={12} xs={12}>
          <ChartWrapper
            title="Line Chart"
            subtitle="Example of a responsive cluster chart."
          >
            <RLineChartCard
              data={createSampleData(theme, 3, 5, 45000)}
            />
          </ChartWrapper>
        </Grid>
        <Grid item lg={12} md={12} s={12} xs={12}>
          <ExtraLink link="https://app.zeplin.io/project/5bdcbdff9907fe688b442df8/screen/5c93bf3c6da6380593052d9b" />
        </Grid>
      </Grid>
    </>
  );
}
