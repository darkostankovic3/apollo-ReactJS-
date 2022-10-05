/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
  TextField as MUITextField,
} from '@material-ui/core';
import useStyles from './styles';

export default function TextArea({
  label,
  optional,
  placeholder,
  rows,
  ...restProps
}) {
  const classes = useStyles();

  const rootClass = `${classes.root} ${restProps.error ? classes.error : ''} ${restProps.disabled ? classes.disabled : ''}`;

  return (
    <Grid container className={classes.textAreaContainer}>
      <Grid item xs={12} className={classes.label}>
        <span className={classes.labelText}>{label}</span>
        {optional ? <span className={classes.optional}>(optional)</span> : ''}
      </Grid>
      <Grid item xs={12}>
        <MUITextField
          multiline
          rows={rows}
          className={rootClass}
          {...restProps}
          placeholder={placeholder}
          rowsMax={15}
        />
      </Grid>
    </Grid>
  );
}
