/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import TextField from '../TextField/TextField';

const defaultListItems = [
  { title: 'Need Data for Items in Dropdown' },
];

const AutoCompleteElement = ({
  mData = defaultListItems,
  label = '',
  multiple = false,
}) => {
  const classes = useStyles();
  return (
    <Autocomplete
      id="combo-box-demo"
      multiple={multiple}
      options={mData}
      getOptionLabel={(option) => option.title}

      className={classes.root}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          margin="normal"
          id="input-default"
          defaultValue="Optional Hint Text"
          type="text"
          variant="outlined"
          className={classes.rootTextField}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);
        return (
          <div>
            {parts.map((part) => (
              <span key={part.text} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
};

export default AutoCompleteElement;
