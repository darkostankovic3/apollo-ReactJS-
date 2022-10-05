/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import useStyles from './styles';

import TextField from '../elements/TextField/TextField';
import TextFieldAction from '../elements/TextField/TextFieldAction';
import TextFieldPassword from '../elements/TextField/TextFieldPassword';
import Widget from '../../../components/Widget/Widget';

// components
import { Typography } from '../../../components/Wrappers/Wrappers';
import ExtraLink from '../../../utils/ExtraLink';

export default function TextFields() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Widget>
            <Typography>Text Fields</Typography>
            <div className={classes.elementContainer}>
              <TextField
                id="input-default"
                defaultValue="Optional Hint Text"
                type="text"
                variant="outlined"
                label="Default"
              />
              <TextField
                error
                id="input-error"
                defaultValue="Optional Hint Text"
                variant="outlined"
                label="Error"
                helperText="Optional Help Text"
              />
              <TextField
                disabled
                id="disabled-default"
                label="Disabled"
                defaultValue="Oliver Queen"
                variant="outlined"
                helperText="Optional Help Text"
              />
            </div>
            <div className={classes.elementContainer}>
              <TextFieldPassword
                id="password-default"
                defaultValue="Optional Hint Text"
                variant="outlined"
                label="Password"
                icon="password"
              />
              <TextFieldAction
                id="input-action"
                defaultValue="Optional Hint Text"
                variant="outlined"
                label="Action"
                helperText="Optional Help Text"
                icon="search"
              />
            </div>
            <div className={classes.elementContainer}>
              <TextField
                optional
                id="optional-default"
                defaultValue="Optional Hint Text"
                type="text"
                variant="outlined"
                label="Optional"
              />
              <TextField
                id="overflow-default"
                defaultValue="Optional Hint Text Overflow"
                type="text"
                variant="outlined"
                label="Overflow"
              />
              <TextField
                required
                id="required-default"
                defaultValue="Optional Hint Text"
                type="text"
                variant="outlined"
                label="Required"
              />
            </div>
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Text Field Material UI Component"
            link="https://material-ui.com/components/text-fields/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
