/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Checkbox as MUICheckbox,
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import useStyles from './styles';

export default function Checkbox({
  checked,
  label,
  ...restProps
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: (checked === false) ? checked : true,
  });

  let isBold;
  if (checked) {
    isBold = `${classes.label} ${classes.boldLabel}`;
  } else {
    isBold = `${classes.label} ${classes.regularLabel}`;
  }
  const [labelClass, setLabelClass] = React.useState(isBold);

  const handleChange = (event) => {
    if (event.target.checked) {
      setLabelClass(`${classes.label} ${classes.boldLabel}`);
    } else {
      setLabelClass(`${classes.label} ${classes.regularLabel}`);
    }
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const disabled = Object.keys(restProps).indexOf('disabled') > -1;

  const disabledClass = disabled ? classes.labelDisabled : '';

  let rootClass = `${classes.root} ${state.checkedA ? classes.standardChecked : classes.standardUnchecked}`;

  if (disabled) {
    rootClass = `${rootClass} ${state.checkedA ? classes.disChecked : classes.disUnchecked}`;
  }

  return (
    <div className={classes.checkboxContainer}>
      <MUICheckbox
        className={rootClass}
        checked={state.checkedA}
        name="checkedA"
        onChange={handleChange}
        color="default"
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<CheckBoxIcon />}
      />
      <div
        className={`${labelClass} ${disabledClass}`}
      >
        {label}
      </div>
    </div>
  );
}

// onClick={(state.checkedA) => handleChange().bind(this)}
