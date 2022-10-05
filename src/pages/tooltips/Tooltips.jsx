import React from 'react';
import {
  Grid,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Create,
  Settings,
  ArrowBack,
  ArrowForward,
} from '@material-ui/icons';

// components
import Widget from '../../components/Widget/Widget';
import { Tooltip } from '../../components/Wrappers/Wrappers';
import ExtraLink from '../../utils/ExtraLink';
import useStyles from './styles';

export default function TooltipsComp() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Widget title="Tooltips" disableWidgetMenu>
            <Box mt={2} width="100%">
              {' '}
              <Grid container alignItems="center" spacing={6}>
                <Grid item className={classes.iconContainer}>
                  <Typography variant="h6" weight="lightMedium">
                    Top Tooltip
                  </Typography>
                  <Tooltip
                    placement="top"
                    disableFocusListener
                    disableTouchListener
                    title="Edit"
                  >
                    <IconButton aria-label="Edit">
                      <Create />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item className={classes.iconContainer}>
                  <Typography variant="h6" weight="lightMedium">
                    Bottom Tooltip
                  </Typography>
                  <Tooltip
                    placement="bottom"
                    disableFocusListener
                    disableTouchListener
                    title="Settings"
                  >
                    <IconButton aria-label="Settings">
                      <Settings />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>

              <Grid container alignItems="center" spacing={6}>
                <Grid item className={classes.iconContainer}>
                  <Typography variant="h6" weight="lightMedium">
                    Left Tooltip
                  </Typography>
                  <Tooltip
                    placement="left"
                    disableFocusListener
                    disableTouchListener
                    title="Left"
                  >
                    <IconButton aria-label="Left Arrow">
                      <ArrowBack />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item className={classes.iconContainer}>
                  <Typography variant="h6" weight="lightMedium">
                    Right Tooltip
                  </Typography>
                  <Tooltip
                    placement="right"
                    disableFocusListener
                    disableTouchListener
                    title="Right"
                  >
                    <IconButton aria-label="Right Arrow">
                      <ArrowForward />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Tooltip Material UI Component"
            link="https://material-ui.com/components/tooltips/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
