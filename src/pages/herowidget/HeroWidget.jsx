/* eslint-disable no-console */
import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Widget from '../../components/Widget/Widget';
import Hero from '../../components/Hero/Hero';
import { Typography } from '../../components/Wrappers/Wrappers';

// styles
import useStyles from './styles';

export default function HeroPage() {
  const classes = useStyles();

  const menuItems = [
    { name: 'Value 1', value: 10 },
    { name: 'Value 2', value: 20 },
    { name: 'Value 3', value: 30 },
    { name: 'Value 4', value: 40 },
    { name: 'Value 5', value: 50 },
  ];

  const handleMenuSelect = (value) => {
    console.log(value);
  };
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="Hero with 3 columns" variant="empty" disableWidgetMenu>
            {/* HERO Component */}
            <Hero
              id={1}
              title="Hello, Neil"
              subTitle="There are a few updates including Aldrin, Buzz moving up in rank"
              buttonLabel="Config Dashboard"
              menuSelectCallback={handleMenuSelect}
            >
              <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} lg={4}>
                  <Widget
                    className={classes.heroWidgetWrapper}
                    disableWidgetMenu
                    noBodyPadding
                  >
                    <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </Widget>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Widget
                    className={classes.heroWidgetWrapper}
                    disableWidgetMenu
                    noBodyPadding
                  >
                    <Box>
                      <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis cupiditate ducimus ea esse excepturi, explicabo
                        in incidunt ipsam itaque necessitatibus neque
                        nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
                      </Typography>
                    </Box>
                  </Widget>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Widget
                    className={classes.heroWidgetWrapper}
                    disableWidgetMenu
                    noBodyPadding
                  >
                    <Box mb={2}>
                      <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis cupiditate ducimus ea esse excepturi, explicabo
                        in incidunt ipsam itaque necessitatibus neque
                        nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
                      </Typography>
                    </Box>
                    <Box mb={2}>
                      <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis cupiditate ducimus ea esse excepturi, explicabo
                        in incidunt ipsam itaque necessitatibus neque
                        nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
                      </Typography>
                    </Box>
                    <Box mb={2}>
                      <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis cupiditate ducimus ea esse excepturi, explicabo
                        in incidunt ipsam itaque necessitatibus neque
                        nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis cupiditate ducimus ea esse excepturi, explicabo
                        in incidunt ipsam itaque necessitatibus neque
                        nulla obcaecati odio pariatur placeat ratione reprehenderit ullam vitae?
                      </Typography>
                    </Box>
                  </Widget>
                </Grid>
              </Grid>
            </Hero>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget title="Hero with 2 columns" variant="empty" disableWidgetMenu>
            {/* HERO Component */}
            <Hero
              id={2}
              title="Header"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              menuLabel="Menu"
              menuItems={menuItems}
              menuSelectCallback={handleMenuSelect}
            >
              <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} lg={6}>
                  <Widget
                    className={classes.heroWidgetWrapper}
                    disableWidgetMenu
                    noBodyPadding
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Widget
                    className={classes.heroWidgetWrapper}
                    disableWidgetMenu
                    noBodyPadding
                  />
                </Grid>
              </Grid>
            </Hero>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
