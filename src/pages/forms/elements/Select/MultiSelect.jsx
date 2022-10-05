/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
} from '@material-ui/icons';
import useStyles from './styles';

const renderTags = (value, getTagProps) => {
  return (
    value.map((option, index) => {
      return (
        <Chip
          variant="outlined"
          label={option.text}
          size="small"
          {...getTagProps({ index })}
        />
      );
    })
  );
};

const renderOption = (item, { selected }) => (
  <div>
    <Checkbox
      color="default"
      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
      checkedIcon={<CheckBoxIcon fontSize="small" />}
      checked={selected}
    />
    {item.text}
  </div>
);

function MultiSelect({
  disabled,
  error,
  label,
  children,
}) {
  const classes = useStyles();

  const menuItems = children.map((item, i) => ({ text: item, value: i }));

  const [isError] = React.useState(error);
  const [borderClass, setBorderClass] = React.useState(
    isError
      ? classes.errorMulti
      : classes.standardMulti,
  );
  const [selectValues] = React.useState(
    isError
      ? [menuItems.find((value) => value.text.includes('Error'))]
      : [],
  );

  const renderInput = (params) => (
    <TextField
      {...params}
      variant="outlined"
      className={`${classes.selectMultiRoot} ${borderClass}`}
    />
  );

  const handleChange = () => {
    if (isError) {
      setBorderClass(classes.errorMulti);
    } else {
      setBorderClass(classes.standardMulti);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.label}>
        <span className={classes.labelText}>{label}</span>
      </Grid>
      <Grid item xs={12}>
        <FormControl
          className={classes.formControlMultiRoot}
          variant="outlined"
          disabled={disabled}
          error={isError}
          fullWidth
        >
          <Autocomplete
            className={classes.autocompleteSelect}
            multiple
            size="small"
            limitTags={3}
            defaultValue={selectValues}
            disableCloseOnSelect
            disableClearable
            disabled={disabled}
            options={menuItems}
            onChange={handleChange}
            getOptionLabel={(item) => item.text}
            renderTags={renderTags}
            renderOption={renderOption}
            renderInput={renderInput}
            getOptionSelected={(option, value) => option.text === value.text}
          />
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

MultiSelect.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

MultiSelect.defaultProps = {
  error: false,
  disabled: false,
  label: '',
};

export default MultiSelect;
