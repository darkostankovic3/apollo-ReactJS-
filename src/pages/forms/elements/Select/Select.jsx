/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select as MUISelect,
} from '@material-ui/core';
import { isMobile } from 'react-device-detect';

import useStyles from './styles';

export default function Select({
  inputProps,
  formControlStyles,
  label,
  placeholder,
  error,
  disabled,
  optional,
  children,
}) {
  const classes = useStyles();
  const [selection, setSelection] = React.useState(error ? 'Error Option' : '');
  const [isError, setIsError] = React.useState(error);

  const menuItems = isMobile
    ? [
      placeholder && <option key="placeholder" value="" selected hidden>{placeholder}</option>,
      ...children.map((name) => <option key={name} value={name}>{name}</option>),
    ] : [
      placeholder && <MenuItem key="placeholder" value="" style={{ display: 'none' }}>{placeholder}</MenuItem>,
      ...children.map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>),
    ];

  const handleChange = (event) => {
    const { value } = event.target;

    setSelection(value);

    setIsError(String(value).toLowerCase().includes('error'));
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.label}>
        <span className={classes.labelText}>{label}</span>
        {optional ? <span className={classes.optional}>(optional)</span> : ''}
      </Grid>
      <Grid item xs={12}>
        <FormControl
          variant="outlined"
          error={isError}
          className={
            classnames(
              classes.formControlRoot,
              selection && classes.selected,
              formControlStyles,
            )
          }
          fullWidth
        >
          <MUISelect
            id="demo-simple-select-outlined"
            value={selection}
            onChange={handleChange}
            inputProps={inputProps}
            native={isMobile}
            disabled={disabled}
            displayEmpty
          >
            {menuItems}
          </MUISelect>
          {isError && (
            <FormHelperText className={classes.errorText}>
              Error Message Text
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
    </Grid>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  label: '',
  placeholder: undefined,
  disabled: false,
  optional: false,
  children: [],
};
