import React from 'react';
import { Grid } from '@material-ui/core';

// components
import Widget from '../../components/Widget/Widget';
import LinearProgress from '../../components/LinearProgress/LinearProgress';
import CircularProgress from '../../components/CircularProgress/CircularProgress';
import ApolloProgress from '../../components/ApolloProgress/ApolloProgress';
import useStyles from './Progress.styles';
import ExtraLink from '../../utils/ExtraLink';

export default function ProgressComp() {
  const [completed, setCompleted] = React.useState(0);
  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }
    const timer = setInterval(progress, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Widget title="Standard Linear (Determinate)" disableWidgetMenu>
            <LinearProgress
              className={classes.progress}
              value={completed}
            />
            <LinearProgress
              color="warning"
              className={classes.progress}
              value={completed}
            />
            <LinearProgress
              color="success"
              className={classes.progress}
              value={completed}
            />
            <LinearProgress
              color="info"
              className={classes.progress}
              value={completed}
            />
            <LinearProgress
              color="error"
              className={classes.progress}
              value={completed}
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Standard Circular (Determinate)" disableWidgetMenu>
            <Grid container>
              <Grid item>
                <CircularProgress
                  className={classes.progress}
                  value={completed}
                />
              </Grid>
              <Grid item>
                <CircularProgress
                  className={classes.progress}
                  color="warning"
                  value={completed}
                />
              </Grid>
              <Grid item>
                <CircularProgress
                  className={classes.progress}
                  color="success"
                  value={completed}
                />
              </Grid>
              <Grid item>
                <CircularProgress
                  className={classes.progress}
                  color="info"
                  value={completed}
                />
              </Grid>
              <Grid item>
                <CircularProgress
                  className={classes.progress}
                  color="error"
                  value={completed}
                />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Small Circular (Determinate)" disableWidgetMenu>
            <Grid container>
              <Grid item>
                <CircularProgress
                  size="small"
                  className={classes.progress}
                  value={completed}
                />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Standard Circular (Indeterminate)" disableWidgetMenu>
            <Grid container>
              <Grid item>
                <CircularProgress
                  className={classes.progress}
                  type="indeterminate"
                />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Apollo Progress (Indeterminate)" disableWidgetMenu>
            <Grid container>
              <Grid item>
                <ApolloProgress
                  className={classes.progress}
                />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses several of the Progress Material UI Components"
            link="https://material-ui.com/components/progress/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
