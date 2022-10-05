import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';

import { Typography } from '../../../Wrappers/Wrappers';
import RMicroAreaChart from '../RMicroAreaChart/RMicroAreaChart';

import useStyles from '../../charts.styles';
import { heights } from '../../general/charts.helpers';

function formatValue(x) {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '-';
}

function getLatestValue(data, valueKey) {
  return data && data.length ? data[data.length - 1][valueKey] : null;
}

export default function MultiMicroAreaChart({
  data,
  xAxisLabelKey,
  yAxisLabel,
  valueKey,
}) {
  const classes = useStyles();
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
      <RMicroAreaChart
        data={seriesItem ? seriesItem.data : null}
        valueKey={valueKey}
        xAxisLabelKey={index === data.length - 1 ? xAxisLabelKey : null}
        height={heights.MULTI}
      />
    </div>
  ));
}

MultiMicroAreaChart.defaultProps = {
  data: null,
  xAxisLabelKey: null,
  yAxisLabel: null,
  valueKey: null,
};

MultiMicroAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  xAxisLabelKey: PropTypes.string,
  yAxisLabel: PropTypes.string,
  valueKey: PropTypes.string,
};
