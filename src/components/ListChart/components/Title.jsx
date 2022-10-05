import { Grid } from '@material-ui/core';
import React from 'react';
import { Typography } from '../../Wrappers/Wrappers';
import styles from './styles';

const Title = ({ title, subtitle, icon }) => {
  const classes = styles();
  return (
    <Grid container alignItems="center">
      {icon && (
        <Grid item className={classes.icon}>
          {icon}
        </Grid>
      )}
      <Grid container alignItems="flex-start" direction="column" item xs>
        <Grid item>
          <Typography weight="semiBold" style={{ color: '#000', fontSize: '14px' }}>
            {' '}
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            weight="light"
            color="textSecondary"
          >
            {' '}
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Title;
