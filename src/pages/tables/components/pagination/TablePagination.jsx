import React from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

export default function Pagination(props) {
  const { subtitle, title } = props;
  const classes = useStyles();

  return (
    <Grid item lg={6} md={6} sm={6} xs={6}>
      <Typography className={classes.title} variant="h5" component="div">
        {title}
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle2" component="div">
        {subtitle}
      </Typography>

      {/*
        <SearchState />

      <Table />
      <TableHeaderRow />

      <SearchPanel
        className={classes.searchBox}
        variant="outlined"
       />
      */}
    </Grid>
  );
}
