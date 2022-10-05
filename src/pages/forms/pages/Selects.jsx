/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import MultiSelect from '../elements/Select/MultiSelect';
import Select from '../elements/Select/Select';
import Widget from '../../../components/Widget/Widget';

// components
import ExtraLink from '../../../utils/ExtraLink';
import generateSampleData from '../elements/Select/SampleData';

import styles from './styles';

const ExampleSelect = ({
  label, error, disabled, optional, placeholder = 'Placeholder Text', className,
}) => {
  const numSelectItems = 4;

  return (
    <div className={className}>
      <Select
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        optional={optional}
        error={error}
      >
        {generateSampleData(numSelectItems, error)}
      </Select>
    </div>
  );
};

const ExampleMultiSelect = ({
  label, error, disabled, className,
}) => {
  const numMultiSelectItems = 4;

  return (
    <div className={className}>
      <MultiSelect label={label} disabled={disabled} error={error}>
        {generateSampleData(numMultiSelectItems, error)}
      </MultiSelect>
    </div>
  );
};

export default function Selects() {
  const classes = styles();

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={6} lg={4}>
        <Widget title="Selects" disableWidgetMenu stretchToRowHeight>
          <div className={classes.content}>
            <ExampleSelect label="Default" className={classes.select} />
            <ExampleSelect label="Error" error className={classes.select} />
            <ExampleSelect label="Disabled" disabled className={classes.select} />
            <ExampleSelect label="Optional" optional />
          </div>
        </Widget>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Widget title="Multiselects" disableWidgetMenu stretchToRowHeight>
          <div className={classes.content}>
            <ExampleMultiSelect label="Default" className={classes.select} />
            <ExampleMultiSelect label="Error" error className={classes.select} />
            <ExampleMultiSelect label="Disabled" disabled />
          </div>
        </Widget>
      </Grid>

      <Grid item xs={12} md={12} lg={8}>
        <ExtraLink
          title="Design Link"
          subtitle="This component uses the Select Material UI Component"
          link="https://material-ui.com/components/selects/"
          text="Link to Material Docs"
        />
      </Grid>
    </Grid>
  );
}
