/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Checkbox as MUICheckbox,
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import useStyles from './styles';

export default function CheckboxIndeterminate({
  label,
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.checkboxContainer}>
      <MUICheckbox
        className={`${classes.root} ${state.checkedA ? classes.standardUnchecked : classes.standardChecked}`}
        checked={state.checkedA}
        name="checkedA"
        onChange={handleChange}
        icon={<IndeterminateCheckBoxIcon />}
        checkedIcon={<CheckBoxOutlineBlankIcon />}
      />
      <div
        className={classes.label}
      >
        {label}
      </div>
    </div>
  );
}
