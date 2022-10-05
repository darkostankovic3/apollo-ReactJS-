/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import Checkbox from '../elements/Checkbox/Checkbox';
import CheckboxError from '../elements/Checkbox/CheckboxError';
import CheckboxIndeterminate from '../elements/Checkbox/CheckboxIndeterminate';
import Widget from '../../../components/Widget/Widget';

// components
import { Typography } from '../../../components/Wrappers/Wrappers';
import ExtraLink from '../../../utils/ExtraLink';

export default function Checkboxes() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Widget>
            <Typography>Checkbox</Typography>
            <div>
              <Checkbox label="Default" checked="true" />
              <CheckboxIndeterminate label="Indeterminate" />
              <Checkbox label="Disabled" disabled checked="true" />
              <Checkbox label="Disabled" disabled checked={false} />
            </div>
            <br />
            <Typography>Error Form</Typography>
            <CheckboxError label="Error" />
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Checkbox Material UI Component"
            link="https://material-ui.com/components/checkboxes/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
