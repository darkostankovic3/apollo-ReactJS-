import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../../../Widget/Widget';

function ChartWrapper({
  children,
  widgetVariant,
  title,
  subtitle,
}) {
  return (
    <Widget
      title={title}
      subtitle={subtitle}
      variant={widgetVariant}
      noBodyPadding
    >
      {children}
    </Widget>
  );
}

export default ChartWrapper;

ChartWrapper.propTypes = {
  widgetVariant: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

ChartWrapper.defaultProps = {
  widgetVariant: 'chart',
  title: null,
  subtitle: null,
};
