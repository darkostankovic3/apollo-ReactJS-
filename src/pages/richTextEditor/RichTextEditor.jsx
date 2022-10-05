import React from 'react';
import { Grid } from '@material-ui/core';

// components
import Widget from '../../components/Widget/Widget';
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
import ExtraLink from '../../utils/ExtraLink';

export default function RichTextEditorComp() {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={12}>
          <Widget
            title="Rich Text Editor Example"
            disableWidgetMenu
          >
            <RichTextEditor />
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Quill React text editor"
            link="https://quilljs.com/playground/"
            text="Link to Quill Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
