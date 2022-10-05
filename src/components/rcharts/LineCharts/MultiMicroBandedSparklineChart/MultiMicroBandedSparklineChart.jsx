import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';

import { Typography } from '../../../Wrappers/Wrappers';
import RMicroSparklineChart from '../RMicroSparklineChart/RMicroSparklineChart';

import useStyles from './MultiMicroBandedSparklineChart.styles';
import { heights } from '../../general/charts.helpers';

function formatValue(x) {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '-';
}

function getLatestValue(data, valueKey) {
  return data && data.length ? data[data.length - 1][valueKey] : null;
}

export default function MultiMicroBandedSparklineChart({
  data,
  xAxisLabelKey,
  yAxisLabel,
  valueKey,
  bandMidway,
}) {
  const classes = useStyles();
  // finding total max and mins so that the bands are consistent amongst the multi chart
  let seriesMax = null;
  let seriesMin = null;
  data.forEach((seriesItem) => {
    const seriesItemMaxValue = seriesItem && seriesItem.data && seriesItem.data.length
    // eslint-disable-next-line prefer-spread
      ? Math.max.apply(Math, seriesItem.data.map((item) => item[valueKey])) : null;

    const seriesItemMinValue = seriesItem && seriesItem.data && seriesItem.data.length
    // eslint-disable-next-line prefer-spread
      ? Math.min.apply(Math, seriesItem.data.map((item) => item[valueKey])) : null;

    seriesMax = seriesItemMaxValue > seriesMax ? seriesItemMaxValue : seriesMax;
    seriesMin = seriesItemMinValue < seriesMin ? seriesItemMinValue : seriesMin;
  });

  return data.map((seriesItem, index) => (
    <div key={seriesItem ? seriesItem[yAxisLabel] : index}>
      <Grid container>
        <Grid item xs={6} className={classes.labels}>
          <Typography variant="h6">{seriesItem ? seriesItem[yAxisLabel] : '-'}</Typography>
        </Grid>
        <Grid item xs={6} className={classnames(classes.labels, classes.rightLabel)}>
          <Typography variant="h6">{seriesItem ? formatValue(getLatestValue(seriesItem.data, valueKey)) : '-'}</Typography>
        </Grid>
      </Grid>
      <RMicroSparklineChart
        height={heights.MULTI}
        data={seriesItem ? seriesItem.data : null}
        valueKey={valueKey}
        yAxisLabel={seriesItem ? seriesItem[yAxisLabel] : null}
        xAxisLabelKey={index === data.length - 1 ? xAxisLabelKey : null}
        bandMidway={bandMidway || (seriesMax / 2)}
        isBanded
      />
    </div>
  ));
}

MultiMicroBandedSparklineChart.defaultProps = {
  data: null,
  valueKey: null,
  xAxisLabelKey: null,
  yAxisLabel: null,
  bandMidway: null,
};

MultiMicroBandedSparklineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  valueKey: PropTypes.string,
  xAxisLabelKey: PropTypes.string,
  yAxisLabel: PropTypes.string,
  bandMidway: PropTypes.number,
};
