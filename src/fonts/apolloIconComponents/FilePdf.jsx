/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFilePdf(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M17.5 6h3.9a.25.25 0 00.177-.427L16.427.425A.25.25 0 0016 .6v3.9A1.5 1.5 0 0017.5 6z" />
        <path d="M21.75 7a.25.25 0 01.25.248V22a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h10.75a.25.25 0 01.25.248V4.5A2.5 2.5 0 0017.5 7h4.25zM5.767 17h.994v-1.673h1.19c1.008 0 1.568-.679 1.568-1.491 0-.819-.554-1.505-1.569-1.505H5.766V17zm2.736-3.171c0 .392-.294.644-.686.644H6.76v-1.288h1.057c.392 0 .686.259.686.644zM10.134 17h1.841c1.463 0 2.479-.924 2.479-2.331s-1.016-2.338-2.479-2.338h-1.84V17zm.995-.875v-2.919h.847c.958 0 1.462.637 1.462 1.463 0 .791-.539 1.456-1.463 1.456h-.846zM15.16 17h.994v-1.946h2.26V14.2h-2.26v-1.015h2.31v-.854H15.16V17z" />
      </g>
    </svg>
  );
}

export default SvgFilePdf;
