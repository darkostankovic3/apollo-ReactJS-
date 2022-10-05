import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../../Wrappers/Wrappers';

import useStyles from './ChartTooltip.styles';

export default function ChartTooltip({
  title,
  description,
}) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.chartTooltip}>
        <Typography weight="bold" className={classes.chartTooltipTitle}>{title}</Typography>
        <Typography variant="body2" className={classes.chartTooltipDescription}>{description}</Typography>
      </div>
    </>
  );
}

ChartTooltip.defaultProps = {
  title: 'Not available',
  description: '',
};

ChartTooltip.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
