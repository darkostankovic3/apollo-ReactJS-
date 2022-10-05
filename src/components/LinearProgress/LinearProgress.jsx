import React from 'react';
import PropTypes from 'prop-types';

import { LinearProgress as MuiLinearProgress } from '@material-ui/core';

import useStyles from './LinearProgress.styles';

const LinearProgress = ({
  color,
  value,
  className,
}) => {
  const classes = useStyles();

  return (
    <MuiLinearProgress
      className={className}
      classes={{
        bar: classes[color] || classes.primary,
      }}
      variant="determinate"
      value={value}
    />
  );
};

LinearProgress.defaultProps = {
  value: 0,
  className: '',
  color: 'primary',
};

LinearProgress.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success', 'info', 'error']),
};

export default LinearProgress;
