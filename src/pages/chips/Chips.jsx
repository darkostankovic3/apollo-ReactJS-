/* eslint-disable no-console */
import React from 'react';
import {
  Grid, Box,
} from '@material-ui/core';
import {
  SwapHorizontalCircle as AvTimerRoundedIcon,
} from '@material-ui/icons';
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import {
  Chip, Typography,
} from '../../components/Wrappers/Wrappers';
import ExtraLink from '../../utils/ExtraLink';

export default function ChipComp() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={12}>
          <Widget title="Chips" disableWidgetMenu>
            <Typography>
              Chips allow users to enter information, make selections, filter
              content, or trigger actions.
            </Typography>
            <br />
            <Box>
              <Typography variant="body2">
                Default
              </Typography>
              <Chip
                className={classes.chip}
                color="default"
                label="Choice 1"
                onDelete={() => console.log('chip deleted')}
              />
              <Chip
                className={classes.chip}
                color="default"
                label="Choice 2"
                onDelete={() => console.log('chip deleted')}
              />
            </Box>
            <br />
            <Box>
              <Typography variant="body2">
                Default
              </Typography>
              <Chip
                className={classes.chip}
                color="default"
                label="Label"
                icon={<AvTimerRoundedIcon />}
                onDelete={() => console.log('chip deleted')}
              />
              <Chip
                className={classes.chip}
                color="default"
                label="Label"
                icon={<AvTimerRoundedIcon />}
                onDelete={() => console.log('chip deleted')}
              />
            </Box>
            <br />
            <Box>
              <Typography variant="body2">
                Disabled
              </Typography>
              <Chip
                className={classes.chip}
                color="default"
                label="Choice 1"
                onDelete={() => console.log('chip deleted')}
                disabled
              />
              <Chip
                className={classes.chip}
                color="primary"
                label="Choice 2"
                onDelete={() => console.log('chip deleted')}
                disabled
              />
            </Box>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Chip Material UI Component"
            link="https://material-ui.com/components/chips/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
