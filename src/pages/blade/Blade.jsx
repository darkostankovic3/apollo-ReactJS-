/* eslint-disable no-console */
import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Widget from '../../components/Widget/Widget';
import Blade from '../../components/Blade/Blade';
import { Button, Typography } from '../../components/Wrappers/Wrappers';
import ExtraLink from '../../utils/ExtraLink';

// Styles
import useStyles from './styles';

export default function BladesPage() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const handleButtonClick = (event) => {
    setState({ ...state, [event.currentTarget.value]: !state[event.currentTarget.value] });
  };

  const handleOnClose = (anchor) => {
    setState({ ...state, [anchor]: false });
  };

  return (
    <>
      <Blade
        anchor="left"
        open={state.left}
        onCloseCallback={handleOnClose}
        primaryButtonCallback={() => { console.log('Save Button Clicked'); }}
        title="Title Left Side"
        subTitle="Optional subtitle left side"
        hasFooter
      >
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
      </Blade>
      <Blade
        anchor="right"
        open={state.right}
        onCloseCallback={handleOnClose}
        title="Title Right Side"
        subTitle="Optional subtitle right side"
      >
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
        <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis cupiditate ducimus ea esse excepturi, explicabo
          in incidunt ipsam itaque necessitatibus neque
          nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
        </Typography>
      </Blade>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <Widget title="Trigger the Blade component" disableWidgetMenu>
            <Box display="flex" flexWrap="wrap">
              <Button
                className={classes.root}
                color="primary"
                variant="contained"
                size="small"
                value="left"
                onClick={handleButtonClick}
              >
                Left
              </Button>
              <Button
                className={classes.root}
                color="primary"
                variant="contained"
                size="small"
                value="right"
                onClick={handleButtonClick}
              >
                Right
              </Button>
            </Box>
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <ExtraLink
            title="Designer Notes"
            subtitle="This component uses the Drawer Material UI Component and uses the features from this component"
            link="https://material-ui.com/components/drawers/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
