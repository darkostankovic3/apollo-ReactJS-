/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton as MuiIconButton,
} from '@material-ui/core';

import useStyles from './styles';

export default function IconButton({
  disabled,
  icon: Icon,
  type,
  togglevalue,
  on: ToggleOnIcon,
  off: ToggleOffIcon,
  ...restProps
}) {
  const classes = useStyles();
  const [toggleValue, setToggleValue] = React.useState(togglevalue);
  const toggleClass = toggleValue ? classes.toggleOn : classes.toggleOff;
  const colorClass = type === 'iconToggle' ? toggleClass
    : type === 'iconLight' ? classes.iconButtonLight : classes.iconButtonStandard;
  const isDisabled = `${disabled ? classes.disabled : ''}`;

  const handleClick = () => {
    if (type === 'iconToggle') {
      setToggleValue(!toggleValue);
    } else {
      console.log('I\'ve been clicked');
    }
  };

  return (
    <span className={`${classes.iconButtonContainer} ${colorClass} ${isDisabled}`}>
      <MuiIconButton
        onClick={handleClick}
        {...restProps}
      >
        {type === 'iconToggle'
          ? toggleValue ? <ToggleOnIcon /> : <ToggleOffIcon /> : <Icon />}
      </MuiIconButton>
    </span>
  );
}

IconButton.defaultProps = {
  disabled: false,
  /* Only utilized when type !== 'iconToggle', as toggle icons come through in the onn/off attrs */
  icon: {},
  /* toggleValue, on, and off will be null/not supplied when type !== 'toggle' */
  toggleValue: false,
  on: {},
  off: {},
};

IconButton.propTypes = {
  /* Either disabled, or default will be not-disabled (no need to add attr for default) */
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  /* icon, iconToggle, iconLight */
  type: PropTypes.string.isRequired,
  toggleValue: PropTypes.string,
  on: PropTypes.elementType,
  off: PropTypes.elementType,
};
