/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
  // Box,
  Button as MuiButton,
  // IconButton,
  // Grid,
} from '@material-ui/core';

import useStyles from './styles';
// import clsx from "clsx";

export default function Button({
  children,
  disabled,
  fullWidth,
  label,
  size,
  type,
  ...restProps
}) {
  const classes = useStyles();
  // TODO Add props/proptypes

  let buttonProps;
  let colorClass;
  // TODO using this variable for a css workaround on the text button hover
  let buttonContainerClass = classes.buttonContainer;
  let sizeClass = classes.standardSize;
  switch (type) {
    case 'secondary':
      buttonProps = { color: 'secondary', variant: 'contained' };
      colorClass = classes.secondary;
      break;
    case 'tertiary':
      buttonProps = { variant: 'contained' };
      colorClass = classes.tertiary;
      break;
    case 'text':
      buttonProps = { color: 'primary' };
      // TODO using these variable values for a css workaround on the text button hover
      colorClass = '';
      buttonContainerClass = `${classes.buttonContainer} ${classes.text}`;
      break;
    default:
      buttonProps = { color: 'primary', variant: 'contained' };
      colorClass = classes.primary;
  }

  if (size === 'small') {
    buttonProps = { ...buttonProps, size: 'small' };
    sizeClass = '';
  }

  const widthClass = `${fullWidth ? classes.fullWidth : classes.standardWidth}`;
  const isDisabled = `${disabled ? classes.disabled : ''}`;

  const handleClick = () => {
    console.log('I\'ve been clicked');
  };

  return (
    <span className={`${buttonContainerClass} ${widthClass} ${isDisabled}`}>
      <MuiButton
        className={`${classes.root} ${colorClass} ${sizeClass} ${widthClass}`}
        onClick={handleClick}
        {...buttonProps}
        {...restProps}
      >
        {children}
      </MuiButton>
    </span>
  );
}

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  label: '',
  size: '',
};

Button.propTypes = {
  /* Either disabled, or default will be not-disabled (no need to add attr for default) */
  disabled: PropTypes.bool,
  /* Either fullWidth, or default will be standard (no need to add attr for default) */
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  /* Either small, or default will be standard (no need to add attr for default) */
  size: PropTypes.string,
  /* Primary, Secondary, Tertiary, Text */
  type: PropTypes.string.isRequired,
};
