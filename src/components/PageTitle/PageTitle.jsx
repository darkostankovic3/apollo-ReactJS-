import React from 'react';
import { Button } from '@material-ui/core';

// styles
import useStyles from './styles';

// components
import { Typography } from '../Wrappers/Wrappers';

export default function PageTitle({ title, button }) {
  const classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h1">
        {title}
      </Typography>
      {button && (
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          size="large"
          color="secondary"
        >
          {button}
        </Button>
      )}
    </div>
  );
}
