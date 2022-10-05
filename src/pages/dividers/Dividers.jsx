import React from 'react';
import { Grid } from '@material-ui/core';
import Widget from '../../components/Widget/Widget';
import HrDivider from '../../components/Divider/HrDivider';
import ExtraLink from '../../utils/ExtraLink';

export const DividerPageContent = () => (
  <Grid container spacing={4}>
    <Grid item xs={12}>
      <Widget title="Light" disableWidgetMenu>
        <HrDivider type="light" />
      </Widget>
    </Grid>
    <Grid item xs={12}>
      <Widget title="Standard" disableWidgetMenu>
        <HrDivider />
      </Widget>
    </Grid>
    <Grid item xs={12}>
      <Widget title="Dark" disableWidgetMenu>
        <HrDivider type="dark" />
      </Widget>
    </Grid>
  </Grid>
);

export default function DividersPage() {
  return (
    <>
      <DividerPageContent />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Divider Material UI Component"
            link="https://material-ui.com/components/dividers/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
