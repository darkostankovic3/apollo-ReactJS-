import React from 'react';
import {
  Grid,
  Box,
} from '@material-ui/core';

import { Message as MessageIcon } from '@material-ui/icons';
// components
import Widget from '../../components/Widget/Widget';
import useStyles from './styles';

export default function BannersComp() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Widget title="Banner Examples" disableWidgetMenu>
            <Box mt={2} display="flex">
              To see examples of Banners click the
              <span className={classes.messageIcon}><MessageIcon /></span>
              icon in the header.
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Banner Tips" disableWidgetMenu>
            <Grid container alignItems="center">
              <Box mt={2} display="flex">
                <ul>
                  <li>Put your banner component in the top most parent of your react app</li>
                  <li>From there style your banner so it sits below your header components</li>
                  <li>If you are using state management (redux) make a service for banners</li>
                </ul>
              </Box>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
