import React from 'react';

import {
  Fade, Typography, Box, useTheme,
} from '@material-ui/core';
import styles from './styles';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;
  const classes = styles();

  return (
    <div {...other}>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
      >
        <Box p={3} classes={{ root: classes.content }}>{children}</Box>
      </Typography>
    </div>
  );
}

export default function Tab(props) {
  const {
    value, index, name, children,
  } = props;
  const theme = useTheme();
  const classes = styles();
  return (
    <Fade in={value === index} timeout={500}>
      <TabPanel {...props} dir={theme.direction}>
        <Typography className={classes.heading} variant="h3">{name.toUpperCase()}</Typography>
        {children}
      </TabPanel>
    </Fade>
  );
}
