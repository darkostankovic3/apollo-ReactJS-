/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFilePpt(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M17.5 6h3.9a.25.25 0 00.177-.427L16.427.425A.25.25 0 0016 .6v3.9A1.5 1.5 0 0017.5 6z" />
        <path d="M21.75 7a.25.25 0 01.25.248V22a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h10.75a.25.25 0 01.25.248V4.5A2.5 2.5 0 0017.5 7h4.25zM6.057 17h.994v-1.673h1.19c1.008 0 1.568-.679 1.568-1.491 0-.819-.553-1.505-1.568-1.505H6.057V17zm2.737-3.171c0 .392-.294.644-.686.644H7.051v-1.288h1.057c.392 0 .686.259.686.644zM10.425 17h.994v-1.673h1.19c1.008 0 1.568-.679 1.568-1.491 0-.819-.553-1.505-1.568-1.505h-2.184V17zm2.737-3.171c0 .392-.294.644-.686.644h-1.057v-1.288h1.057c.392 0 .686.259.686.644zM15.871 17h1.001v-3.794h1.358v-.875h-3.724v.875h1.365V17z" />
      </g>
    </svg>
  );
}

export default SvgFilePpt;
