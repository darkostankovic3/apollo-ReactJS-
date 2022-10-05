/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  Checkbox as MUICheckbox,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import useStyles from './styles';

export default function CheckboxError() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
  });
  const findError = [state.checkedA, state.checkedB, state.checkedC].filter((v) => v).length >= 0;
  const [isError, setIsError] = React.useState(findError);
  const [type, setType] = React.useState(`${isError ? 'error' : 'standard'}`);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setIsError(findError);
    setType(`${findError ? 'error' : 'standard'}`);
  };

  return (
    <div>
      <FormControl required error={isError} component="fieldset">
        {Object.entries(state).map((obj) => {
          const isChecked = obj[1];
          return (
            <div key={obj[0]} className={classes.checkboxContainer}>
              <MUICheckbox
                className={`${classes.root} ${isChecked ? classes[`${type}Checked`] : classes[`${type}Unchecked`]}`}
                checked={isChecked}
                name={obj[0]}
                onChange={handleChange}
                color="default"
              />
              <div
                className={`${classes.label} ${obj[1] ? classes.boldLabel : classes.regularLabel}`}
              >
                {obj[0]}
              </div>
            </div>
          );
        })}
        <FormHelperText>Helper Message Text</FormHelperText>
      </FormControl>
    </div>
  );
}
