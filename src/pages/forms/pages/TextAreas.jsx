/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import TextArea from '../elements/TextArea/TextArea';
import Widget from '../../../components/Widget/Widget';

// components
import { Typography } from '../../../components/Wrappers/Wrappers';
import ExtraLink from '../../../utils/ExtraLink';

export default function TextAreas() {
  return (
    <>
      <Grid container direction="row" spacing={4}>
        <Grid container item xs={12}>
          <Grid item xs={12} lg={6}>
            <Widget>
              <Typography>Text Areas</Typography>
              <Grid container justifyContent="flex-start" spacing={4}>
                <Grid item xs>
                  <TextArea
                    rows={4}
                    label="Default Text Area"
                    aria-label="Apollo Text Area"
                    placeholder="Optional Hint Text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>
                  <TextArea
                    error
                    rows={4}
                    label="Error"
                    aria-label="Apollo Text Area"
                    placeholder="Optional Hint Text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs>
                  <TextArea
                    disabled
                    rows={4}
                    label="Disabled"
                    aria-label="Apollo Text Area"
                    placeholder="Optional Hint Text"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Widget>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12} lg={6}>
            <ExtraLink
              title="Design Link"
              subtitle="This component uses the Text Field Material UI Component"
              link="https://material-ui.com/components/text-fields/"
              text="Link to Material Docs"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
