import React from 'react';
import {
  Grid, Box, IconButton, useTheme,
} from '@material-ui/core';
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons';
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import {
  Badge, Button, Typography,
} from '../../components/Wrappers/Wrappers';
import ExtraLink from '../../utils/ExtraLink';

export default function BadgeComp() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Widget title="Badge Example" disableWidgetMenu>
            <Typography>
              Badge generates a small badge to the top-right of its child(ren)
            </Typography>
            <Box>
              <Typography>
                Badges can be used as part of links or buttons to provide a
                counter.
              </Typography>
              <Box my={3}>
                <Badge color="inherit" badgeContent="1">
                  <Button variant="contained" className={classes.paddingTop}>
                    Example heading
                  </Button>
                </Badge>
              </Box>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Icon Badges" disableWidgetMenu>
            <Typography>
              Badge can also be used as a parent of a icon as well as a parent
              of a clickable icon
            </Typography>
            <Box>
              <Box
                my={1}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Badge
                  className={classes.badge}
                  badgeContent={4}
                  color="inherit"
                >
                  <MailIcon />
                </Badge>
                <Badge
                  className={classes.badge}
                  badgeContent={10}
                  color="inherit"
                >
                  <MailIcon />
                </Badge>
                <IconButton
                  aria-label="4 pending messages"
                  className={classes.badge}
                >
                  <Badge badgeContent={4} color="inherit">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Box>
            <Typography>
              Badge can also be set with the `&quot;`max`&quot;` value attribute:
            </Typography>
            <Box>
              <Box
                my={1}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Badge
                  className={classes.badge}
                  badgeContent={14}
                  max={8}
                  color="inherit"
                >
                  <MailIcon />
                </Badge>
                <Badge
                  className={classes.badge}
                  badgeContent={10}
                  max={8}
                  color="inherit"
                >
                  <MailIcon />
                </Badge>
                <IconButton
                  aria-label="4 pending messages"
                  className={classes.badge}
                >
                  <Badge badgeContent={4} color="inherit" max={3}>
                    <MailIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Box>
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Widget disableWidgetMenu>
            <Grid container alignItems="center">
              <Box>
                <Typography>
                  You can see an example of the badge in use in the top navigational menu.
                </Typography>
                <Box
                  component="div"
                  display="inline-block"
                  p={4}
                  mt={4}
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                  }}
                >
                  <Badge color="inherit" badgeContent="1">
                    <Badge badgeContent={4} color="inherit">
                      <NotificationsIcon />
                    </Badge>
                  </Badge>
                </Box>
              </Box>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Badge Material UI Component"
            link="https://material-ui.com/components/badges/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
