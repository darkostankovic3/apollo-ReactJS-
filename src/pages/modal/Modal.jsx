import React from 'react';
import {
  Grid,
} from '@material-ui/core';

// components
import ExtraLink from '../../utils/ExtraLink';
import SimpleCustomModalCard from './SimpleCustomModal/SimpleCustomModalCard';
import OptionalSizesModalCard from './OptionalSizesModal/OptionalSizesModalCard';
import WithImageModalCard from './WithImageModal/WithImageModalCard';
import FormModalCard from './FormModal/FormModalCard';
import GridModalCard from './GridModal/GridModalCard';

export default function ModalComp() {
  return (
    <Grid container spacing={6}>
      <Grid container item spacing={4} sm={6} xs={12}>
        <Grid item xs={12}>
          <SimpleCustomModalCard />
        </Grid>
        <Grid item xs={12}>
          <OptionalSizesModalCard />
        </Grid>
        <Grid item xs={12}>
          <WithImageModalCard />
        </Grid>
        <Grid item xs={12}>
          <FormModalCard />
        </Grid>
      </Grid>
      <Grid item sm={6} xs={12}>
        <GridModalCard />
      </Grid>
      <Grid item xs={12}>
        <ExtraLink
          title="Design Link"
          subtitle="This component uses the Modal Material UI Component"
          link="https://material-ui.com/components/modal/"
          text="Link to Material Docs"
        />
      </Grid>
    </Grid>
  );
}
