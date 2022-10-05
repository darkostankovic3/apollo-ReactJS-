import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CircularProgress as MuiCircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import useStyles from './CircularProgress.styles';

const CircularProgress = ({
  color,
  type,
  value,
  className,
  size,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  function getSizeStyles(option) {
    switch (option) {
      case 'small':
        return {
          circleSize: theme.spacing(4),
          circleThickness: theme.spacing(3),
        };
      case 'standard':
      default:
        return {
          circleSize: theme.spacing(20),
          circleThickness: theme.spacing(3) / 2,
        };
    }
  }

  const { circleSize, circleThickness } = getSizeStyles(size);
  return (
    <div className={classnames(classes.root, className)}>
      {/* Gray Background Progress */}
      <MuiCircularProgress
        className={classes.bottom}
        size={circleSize}
        thickness={circleThickness}
        variant="static"
        value={100}
      />
      {/* Actual progress indicator */}
      <MuiCircularProgress
        className={classnames(classes.top, (classes[color] || classes.primary))}
        classes={{
          circle: classes.circle,
        }}
        size={circleSize}
        thickness={circleThickness}
        variant={type === 'determinate' ? 'static' : 'indeterminate'}
        value={value}
      />
    </div>
  );
};

CircularProgress.defaultProps = {
  value: 0,
  className: '',
  type: 'determinate',
  color: 'primary',
  size: 'standard',
};

CircularProgress.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.oneOf(['indeterminate', 'determinate']),
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success', 'info', 'error']),
  size: PropTypes.oneOf(['standard', 'small']),
};

export default CircularProgress;
