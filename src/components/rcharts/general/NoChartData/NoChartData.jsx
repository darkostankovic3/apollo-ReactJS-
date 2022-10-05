import React from 'react';
import { Typography } from '../../../Wrappers/Wrappers';
import useStyles from './NoChartData.styles';

export default function NoChartData() {
  const classes = useStyles();
  return (
    <div className={classes.nodataContainer}>
      <div className={classes.center}>
        <Typography color="colorNeutral6">
          No data
        </Typography>
      </div>
    </div>
  );
}
