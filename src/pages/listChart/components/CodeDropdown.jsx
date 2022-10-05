import { Grid } from '@material-ui/core';
import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import Code from '../../../components/Code/Code';
import { Typography } from '../../../components/Wrappers/Wrappers';

const CodeDropdown = ({ data, element, className }) => (
  <div className={className}>
    <Accordion title="Code">
      <Grid container spacing={8}>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Typography>
              Data
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Code>
              {data}
            </Code>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Element
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Code>
            {element}
          </Code>
        </Grid>
      </Grid>
    </Accordion>
  </div>
);

export default CodeDropdown;
