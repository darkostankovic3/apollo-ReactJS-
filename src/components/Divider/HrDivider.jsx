import React from 'react';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

// styles
import useStyles from './styles';

const HrDivider = (props) => {
  const { type } = props;
  const classes = useStyles();

  return (
    <Divider classes={{ root: classes[type] }} />
  );
};

HrDivider.defaultProps = {
  type: 'standard',
};

HrDivider.propTypes = {
  type: PropTypes.oneOf(['standard', 'light', 'dark']),
};

export default HrDivider;
