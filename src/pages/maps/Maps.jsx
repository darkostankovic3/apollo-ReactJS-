import React from 'react';
import {
  Marker,
} from 'react-google-maps';
import { Grid } from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';

export default function Maps() {
  // REPLACE THIS WITH YOUR API KEY
  // hide your api keys and don't commit them to the repo https://medium.com/better-programming/how-to-hide-your-api-keys-c2b952bc07e6
  const API_KEY = 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg';

  return (
    <Grid container spacing={4}>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <GoogleMaps googleMapApiKey={API_KEY}>
          <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
        </GoogleMaps>
      </Grid>
      <Grid item lg={12} md={12} s={12} xs={12}>
        <Widget
          title="Google Maps"
          subtitle="How to use the Google Maps API"
          disableWidgetMenu
        >
          <p>
            {'To use this component, '}
            <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" rel="noreferrer" target="_blank">get an API key from Google.</a>
            {` FYI, keep your key private and don’t share it publicly.
          Once you have all that set up, go to this component's file (Maps.jsx)
          and replace the API_KEY variable with your api key.`}
          </p>
        </Widget>
      </Grid>
    </Grid>
  );
}
