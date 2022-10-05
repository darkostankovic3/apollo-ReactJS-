/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Paper,
  Grid,
} from '@material-ui/core';
import useStyles from './styles';

import DatePicker from '../elements/DatePicker/DatePicker';
import TimePicker from '../elements/TimePicker/TimePicker';

// components
import { Typography } from '../../../components/Wrappers/Wrappers';
import ExtraLink from '../../../utils/ExtraLink';

export default function DateTimePickers() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paperContainer}>
        <Typography>Date and Time Pickers</Typography>
        <div className={classes.elementContainer}>
          <DatePicker />
        </div>
        <div className={classes.elementContainer}>
          <TimePicker />
        </div>
      </Paper>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Date/ Time pickers Material UI Component"
            link="https://material-ui.com/components/pickers/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
