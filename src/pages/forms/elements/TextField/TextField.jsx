/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  TextField as MUITextField,
} from '@material-ui/core';
import useStyles from './styles';

export default function TextField({
  defaultValue,
  id,
  label,
  optional,
  required,
  type,
  variant,
  ...restProps
}) {
  const classes = useStyles();

  return (
    <div className={classes.textFieldContainer}>
      <div className={classes.label}>
        <span className={classes.labelText}>{label}</span>
        {optional ? <span className={classes.optional}>(optional)</span> : ''}
        {required ? <span className={classes.required}>*</span> : ''}
      </div>
      <MUITextField
        {...restProps}
        className={classes.root}
        id={id}
        type={type}
        variant={variant}
        placeholder={defaultValue}
      />
    </div>
  );
}
