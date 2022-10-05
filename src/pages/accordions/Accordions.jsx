import React from 'react';
import {
  Grid,
} from '@material-ui/core';

// components
import Accordion from '../../components/Accordion/Accordion';
import Widget from '../../components/Widget/Widget';
import ExtraLink from '../../utils/ExtraLink';
import { getTextHTML } from '../../utils/randUtils';

export default function AccordionComp() {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <Widget
            title="Accordion Panel Example"
            disableWidgetMenu
          >
            <Accordion title="Accordion Panel 1" id="panel-1a">
              {getTextHTML('panel-1a')}
            </Accordion>
            <Accordion title="Accordion Panel 2" id="panel-2a">
              {getTextHTML('panel-2a')}
            </Accordion>
            <Accordion title="Disabled Accordion Panel" id="panel-3a" disabled />
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <ExtraLink
            title="Design Notes"
            subtitle="This component uses the Accordion Material UI Component"
            link="https://material-ui.com/components/accordion/"
            text="Link to Material Docs for Accordian"
          />
        </Grid>
      </Grid>
    </div>
  );
}
