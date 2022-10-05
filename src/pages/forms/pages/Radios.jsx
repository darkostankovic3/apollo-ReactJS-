/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import useStyles from './styles';

import RadioButton from '../elements/RadioButton/RadioButton';
import RadioButtonError from '../elements/RadioButton/RadioButtonError';
import Widget from '../../../components/Widget/Widget';

// components
import { Typography } from '../../../components/Wrappers/Wrappers';
import ExtraLink from '../../../utils/ExtraLink';

export default function Radios() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={12} xs={12}>
          <Widget>
            <Typography>Radio Buttons</Typography>
            <div className={classes.elementContainer}>
              <RadioButton label="Default" />
            </div>
            <br />
            <Typography>Error Form</Typography>
            <RadioButtonError label="Error" />
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Radio Material UI Component"
            link="https://material-ui.com/components/radio-buttons/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
