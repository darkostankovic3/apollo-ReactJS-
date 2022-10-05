/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import useStyles from './DemoSelectors.styles';

export function HeaderSubtitleDisplayOptions({
  onDropDownSelection,
  dropDownSelection,
}) {
  const classes = useStyles();

  return (
    <div className={classes.rowSelect}>
      <FormControl>
        <InputLabel>Title Display</InputLabel>
        <Select
          value={dropDownSelection}
          onChange={(e) => onDropDownSelection(e.target.value)}
        >
          <MenuItem value={1}>Title and Subtitle</MenuItem>
          <MenuItem value={2}>Title Only</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export function DynamicRowsOptions({
  onDropDownSelection,
  dropDownSelection,
}) {
  const classes = useStyles();
  return (
    <div className={classes.rowSelect}>
      <FormControl>
        <InputLabel># of Rows</InputLabel>
        <Select
          value={dropDownSelection}
          onChange={(e) => onDropDownSelection(e.target.value)}
        >
          <MenuItem value="0">No Data</MenuItem>
          <MenuItem value={1}>One Row</MenuItem>
          <MenuItem value={10}>Ten Rows</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export function PaginationOptions({
  onDropDownSelection,
  dropDownSelection,
}) {
  const classes = useStyles();
  return (
    <div className={classes.rowSelect}>
      <FormControl>
        <InputLabel># of Rows</InputLabel>
        <Select
          value={dropDownSelection}
          onChange={(e) => onDropDownSelection(e.target.value)}
        >
          <MenuItem value={5}>Five Rows</MenuItem>
          <MenuItem value={10}>Ten Rows</MenuItem>
          <MenuItem value={15}>Fifteen Rows</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
