/* eslint-disable no-console */
import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Widget from '../../components/Widget/Widget';
import FileUpload from '../../components/FileUpload/FileUpload';

export default function FileUploadPage() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Default State" disableWidgetMenu>
            <FileUpload
              id={1}
              label="Label"
              onChangeCallback={(uploadedFiles) => {
                console.log(uploadedFiles);
              }}
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Disabled State" disableWidgetMenu>
            <FileUpload
              id={2}
              label="Label"
              disabled
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Button Group" disableWidgetMenu>
            <FileUpload
              id={4}
              label="Label"
              onChangeCallback={(uploadedFiles) => {
                console.log(uploadedFiles);
              }}
              hasButtonGroup
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Max Items / Help Text" disableWidgetMenu>
            <FileUpload
              id={5}
              label="Label"
              maxItems={4}
              onChangeCallback={(uploadedFiles) => {
                console.log(uploadedFiles);
              }}
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Max Size Error" disableWidgetMenu>
            <FileUpload
              id={6}
              label="Label"
              maxSize={1000000}
              onChangeCallback={(uploadedFiles) => {
                console.log(uploadedFiles);
              }}
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="File Type Error" disableWidgetMenu>
            <FileUpload
              id={7}
              label="Label"
              accept={['image/jpeg', 'image/png']}
              onChangeCallback={(uploadedFiles) => {
                console.log(uploadedFiles);
              }}
            />
          </Widget>
        </Grid>
      </Grid>
    </Box>
  );
}
