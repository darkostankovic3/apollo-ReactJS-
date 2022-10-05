import React from 'react';
import { Grid } from '@material-ui/core';

// components
import Widget from '../../components/Widget/Widget';
import { Typography } from '../../components/Wrappers/Wrappers';

export default function Navbar() {
  return (
    <div>
      <Grid container spacing={10}>
        <Grid item>
          <Widget title="Navbar Info" disableWidgetMenu>
            <Typography>
              The Header component acts as a navbar. To see an example of the header
              look at the top of this dashboard. The Header component is responsive.
              When a screen is a phone or tablet width some of the items in the navbar
              collapse or dissapear.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
