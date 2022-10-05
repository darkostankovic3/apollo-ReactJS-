import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import apolloLogo from '../../images/apollo-logo-big.png';

// styles
import useStyles from './styles';

// components
import { Button, Typography } from '../../components/Wrappers/Wrappers';

export default function Error() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotype}>
        <img src={apolloLogo} alt="Logo" style={{ border: '1px solid #fff' }} />
        <Typography variant="h3" className={classes.logotypeText}>
          Apollo React Theme
          <br />
          and Dashboard
        </Typography>
      </div>
      <Paper classes={{ root: classes.paperRoot }}>
        <Typography
          variant="h1"
          color="primary"
          className={classnames(classes.textRow, classes.errorCode)}
        >
          404
        </Typography>
        <Typography variant="h5" color="primary" className={classes.textRow}>
          Oops. The page you were looking for is not here. We don&apos;t know why. Sorry about that.
        </Typography>
        <Typography
          variant="h6"
          color="text"
          colorBrightness="hint"
          className={classnames(classes.textRow, classes.safetyText)}
        >
          I would suggest that you just go back and login again.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          size="large"
          className={classes.backButton}
        >
          Back to Login Page
        </Button>
      </Paper>
    </Grid>
  );
}
