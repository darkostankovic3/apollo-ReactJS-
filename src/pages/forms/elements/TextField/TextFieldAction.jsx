/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from './styles';

export default function TextFieldAction({
  id,
  label,
}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = () => {
    // click event code
  };

  return (
    <div className={classes.textFieldContainer}>
      <div className={classes.label}>{label}</div>
      <FormControl variant="outlined">
        <OutlinedInput
          className={classes.root}
          id={id}
          type="text"
          value={values.amount}
          onChange={handleChange('amount')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
                edge="end"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
