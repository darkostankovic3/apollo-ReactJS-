import React from 'react';
import Chip from '@material-ui/core/Chip';

import { useTheme } from '@material-ui/core';

// styles
import useStyles from './styles';

// components
const Tag = ({ colorBg = 'colorDataViz1', icon, label = 'No label' }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Chip
        size="small"
        label={label}
        style={{ backgroundColor: theme.palette[colorBg].main }}
        className={classes.label}
        icon={icon || undefined}
      />
    </>
  );
};

export default Tag;
