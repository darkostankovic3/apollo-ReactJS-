import React from 'react';
import VectorMapComponent from '../../components/VectorMap/VectorMap';

function VectorMap() {
  const markers = [
    {
      name: 'Buenos Aires',
      coordinates: [-58.3816, -34.6037], // [lon, lat]
      color: 'primary',
    },
    {
      name: 'Cleveland',
      coordinates: [-81.681290, 41.505493], // [lon, lat]
      color: 'secondary',
    },
    {
      name: 'Sydney',
      coordinates: [151.209900, -33.865143], // [lon, lat]
      color: 'warning',
    },
    {
      name: 'Ljubljana',
      coordinates: [14.505751, 46.056946], // [lon, lat]
      color: 'success',
    },
    {
      name: 'Tokyo',
      coordinates: [139.839478, 35.652832], // [lon, lat]
      color: 'info',
    },
    {
      name: 'Abuja',
      coordinates: [7.491302, 9.072264], // [lon, lat]
      color: 'error',
    },
  ];

  return (
    <VectorMapComponent markers={markers} />
  );
}

export default VectorMap;
