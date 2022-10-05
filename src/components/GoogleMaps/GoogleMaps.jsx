import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
} from 'react-google-maps';
import { Paper } from '@material-ui/core';

import useStyles from './GoogleMaps.styles';

export default function GoogleMaps({
  googleMapApiKey,
  defaultCenter,
  defaultZoom,
  mapContainerClassNames,
  children,
}) {
  const classes = useStyles();

  const BasicMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={{
          lat: parseFloat(defaultCenter[1]),
          lng: parseFloat(defaultCenter[0]),
        }}
      >
        {children}
      </GoogleMap>
    )),
  );

  return (
    <Paper className={classnames(classes.mapContainer, mapContainerClassNames)}>
      <BasicMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapApiKey}`}
        loadingElement={<div style={{ height: 'inherit', width: 'inherit' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </Paper>
  );
}

GoogleMaps.defaultProps = {
  defaultCenter: [144.950259, -37.813179],
  defaultZoom: 12,
  children: null,
  mapContainerClassNames: null,
};

GoogleMaps.propTypes = {
  googleMapApiKey: PropTypes.string.isRequired,
  /* This should be in the format of [lon, lat] as this is standard for web maps */
  defaultCenter: PropTypes.arrayOf(PropTypes.number),
  /* Options are 0 - 21 where 0 is the most zoomed out and 21 is the most zoomed in */
  defaultZoom: PropTypes.number,
  /* These can be any map elements such as markers */
  children: PropTypes.element,
  mapContainerClassNames: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.arrayOf(PropTypes.string)],
  ),
};
