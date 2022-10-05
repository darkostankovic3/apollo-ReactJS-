import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import classnames from 'classnames';

// styles
const useStyles = makeStyles((theme) => ({
  dotBase: {
    width: 16,
    height: 16,
    backgroundColor: theme.palette.text.hint,
    borderRadius: '50%',
    transition: theme.transitions.create('background-color'),
  },
  dotXXSmall: {
    width: 9,
    height: 9,
  },
  dotXSmall: {
    width: 13,
    height: 13,
  },
  dotMedium: {
    width: 16,
    height: 16,
  },
  dotLarge: {
    width: 20,
    height: 20,
  },
  dotXXLarge: {
    width: 50,
    height: 50,
  },
}));

export default function Dot({ size = 'small', color, style }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      className={classnames(classes.dotBase, {
        [classes.dotXXSmall]: size === 'xxsmall',
        [classes.dotXSmall]: size === 'xsmall',
        [classes.dotMedium]: size === 'medium',
        [classes.dotBase]: size === 'small',
        [classes.dotLarge]: size === 'large',
        [classes.dotXXLarge]: size === 'xxlarge',
      })}
      style={{
        border: color === 'secondary' ? theme.palette.secondaryBorder : 'none',
        backgroundColor:
          color && theme.palette[color] && theme.palette[color].main,
        ...style,
      }}
    />
  );
}
