import React from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

export default function TableHeader(props) {
  const { subtitle, title } = props;
  const classes = useStyles();

  return (
    <Grid item lg={6} md={6} sm={12} xs={12}>
      <Typography className={classes.title} variant="h5" component="div">
        {title}
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle2" component="div">
        {subtitle}
      </Typography>
    </Grid>
  );
}
