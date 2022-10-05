/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import {
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@material-ui/icons';
import useStyles from './styles';

export default function RadioButtonError() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  // Forcing Error for display purposes:
  const [error, setError] = React.useState(true);
  const [formClass] = React.useState(`${classes.formLabelRoot} ${classes.formLabelError}`);
  const [radioClass, setRadioClass] = React.useState(`${classes.root} ${classes.rootError}`);
  const [helperText, setHelperText] = React.useState('');

  const radioValues = [
    {
      text: 'Label A',
      value: 'labelA',
    },
    {
      text: 'Label B',
      value: 'labelB',
    },
    {
      text: 'Label C',
      value: 'labelC',
    },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      setError(true);
      setRadioClass(`${classes.root} ${classes.rootError}`);
      setHelperText('Please select an option');
    } else {
      setError(false);
      setRadioClass(classes.root);
      setHelperText('Thank you!');
      setValue('');
    }
  };

  return (
    <div className={classes.checkboxContainerError}>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error}>
          <RadioGroup
            aria-label="options"
            name="options"
            value={value}
            onChange={handleChange}
            className={classes.radioGroup}
          >
            {radioValues.map((obj) => (
              <FormControlLabel
                key={obj.value}
                className={`${formClass} ${obj.value === value ? classes.boldLabel : classes.regularLabel}`}
                value={obj.value}
                control={(
                  <Radio
                    className={radioClass}
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<RadioButtonChecked />}
                    disableRipple
                  />
                )}
                label={obj.text}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          {/*
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Submit
          </Button>
          */}
          <FormHelperText>Error Message Text</FormHelperText>
        </FormControl>
      </form>
    </div>
  );
}
