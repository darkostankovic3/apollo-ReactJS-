/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import {
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@material-ui/icons';
import useStyles from './styles';

export default function RadioButton() {
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

  const classes = useStyles();
  const [value, setValue] = React.useState(radioValues[0].value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.radioContainer}>
      <FormControl component="fieldset">
        <div className={classes.label}>Options:</div>
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
              className={`${classes.formLabelRoot} ${obj.value === value ? classes.boldLabel : classes.regularLabel}`}
              value={obj.value}
              control={(
                <Radio
                  className={classes.root}
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                  disableRipple
                />
              )}
              label={obj.text}
            />
          ))}
          <FormControlLabel
            className={`${classes.formLabelRoot} ${classes.formLabelDisabled}`}
            disabled
            control={(
              <Radio
                className={classes.root}
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
                disableRipple
              />
            )}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
