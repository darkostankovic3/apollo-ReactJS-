import React from 'react';
import PropTypes from 'prop-types';
import { isIE } from 'react-device-detect';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';
import { useTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import map from '../../images/map.json';

import mapStyles from './VectorMap.styles';

function VectorGeography({
  geography,
  projection,
}) {
  const theme = useTheme();
  const color = theme.palette.primary;
  const countryColor = fade(color.light, 0.2);
  const countryOutline = fade(color.main, 0.2);
  return (
    <Geography
      key={geography.id}
      geography={geography}
      projection={projection}
      style={{
        default: {
          fill: countryColor,
          stroke: countryOutline,
          strokeWidth: 0.75,
          outline: 'none',
        },
        hover: {
          fill: countryColor,
          stroke: countryOutline,
          strokeWidth: 0.75,
          outline: 'none',
        },
        pressed: {
          fill: countryColor,
          stroke: countryOutline,
          strokeWidth: 0.75,
          outline: 'none',
        },
      }}
    />
  );
}

function renderMarker({
  name,
  coordinates,
  color,
}) {
  const theme = useTheme();
  const styles = mapStyles(theme);
  const markerColor = theme.palette[color] ? theme.palette[color] : theme.palette.primary;

  const markerStyle = {
    fill: markerColor.main,
    outlineWidth: 0,
  };
  return (
    <Marker
      key={name}
      marker={{
        coordinates,
        name,
      }}
      fillOpacity={100}
      style={{
        default: markerStyle,
        hover: markerStyle,
        pressed: markerStyle,
      }}
    >
      <circle
        cx={0}
        cy={0}
        r={5}
        style={{
          stroke: theme.palette.colorWhite.main,
          strokeWidth: color !== 'secondary' ? 2.5 : 0,
          opacity: 0.9,
        }}
      />
      <text
        textAnchor="middle"
        y={-theme.spacing(4)}
        style={styles.mapText}
      >
        {name}
      </text>
    </Marker>
  );
}

function VectorMap({
  defaultCenter,
  defaultZoom,
  children,
  markers,
}) {
  const theme = useTheme();
  return (
    <ComposableMap
      projectionConfig={{
        scale: 205,
        rotation: [-11, 0, 0],
      }}
      width={980}
      height={551}
      viewBox="0 0 980 551"
      style={{
        width: '100%',
        height: `${isIE ? 'none' : 'auto'}`,
        overflow: 'auto',
        backgroundColor: theme.palette.colorNeutral2.main,
      }}
    >
      <ZoomableGroup
        center={defaultCenter}
        zoom={defaultZoom}
        disablePanning
      >
        <Geographies geography={map}>
          {(geographies, projection) => geographies.map(
            (geography) => geography.id !== 'ATA' && (
            <VectorGeography key={geography.id} projection={projection} geography={geography} />
            ),
          )}
        </Geographies>
        <Markers>
          {markers.map(renderMarker)}
        </Markers>
        {children}
      </ZoomableGroup>
    </ComposableMap>
  );
}

VectorMap.defaultProps = {
  defaultCenter: [0, 20],
  defaultZoom: 1,
  children: null,
  markers: [],
};

VectorMap.propTypes = {
  /* This should be in the format of [lon, lat] as this is standard for web maps */
  defaultCenter: PropTypes.arrayOf(PropTypes.number),
  /* Options are 0 - 21 where 0 is the most zoomed out and 21 is the most zoomed in */
  defaultZoom: PropTypes.number,
  /* These can be any supported map elements */
  children: PropTypes.element,
  markers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success', 'info', 'error']),
  })),
};

export default VectorMap;
