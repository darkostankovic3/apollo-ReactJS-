import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../../../Widget/Widget';
import useStyles from './KpiWrapper.styles';

function determineTitle(title, data, valueKey) {
  if (title) {
    return title;
  }
  if (!data) {
    return '-';
  }
  // get the most recent value
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const latestValue = data[data.length - 1][valueKey];
  return formatter.format(latestValue);
}

export default function KpiWrapper({
  title, subtitle, children,
}) {
  const classes = useStyles();
  const { data, valueKey } = children.props;

  const formattedTitle = determineTitle(title, data, valueKey);
  return (
    <Widget
      title={formattedTitle}
      subtitle={subtitle}
      variant="tinychart"
      subtitleClass={classes.truncate}
      noBodyPadding
    >
      {children}
    </Widget>
  );
}

KpiWrapper.defaultProps = {
  title: null,
  subtitle: null,
};

KpiWrapper.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};
