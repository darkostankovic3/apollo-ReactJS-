import React from 'react';
import { HashRouter, Link as RouteLink } from 'react-router-dom';
import { Breadcrumbs, Grid } from '@material-ui/core';
import { HomeRounded, NavigateNext } from '@material-ui/icons';
import { Typography } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import ExtraLink from '../../utils/ExtraLink';

export default function BreadcrumbsPage() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="Breadcrumbs" disableWidgetMenu>
            <HashRouter basename="/">
              <Breadcrumbs
                separator={<NavigateNext />}
                aria-label="breadcrumb"
              >
                <Typography variant="h6" weight="medium" color="colorNeutral6">
                  <RouteLink to="/app/dashboard">
                    <HomeRounded />
                  </RouteLink>
                </Typography>
                <Typography variant="h6" weight="medium" color="colorNeutral6">
                  <RouteLink to="/app/dashboard">Level 2</RouteLink>
                </Typography>
                <Typography variant="h6" weight="medium" color="colorNeutral6">
                  <RouteLink to="/app/dashboard">Level 3</RouteLink>
                </Typography>
                <Typography variant="h6" weight="semiBold" color="colorBlack" aria-current="page">
                  Current Page
                </Typography>
              </Breadcrumbs>
            </HashRouter>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink link="zpl://screen?pid=5bdcbdff9907fe688b442df8&sid=5d361d007386f72f5269c918" />
        </Grid>
      </Grid>
    </>
  );
}
