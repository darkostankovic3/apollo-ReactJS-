/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgStatusWarning(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M23.119 20L13.772 2.15a2 2 0 00-3.543 0L.881 20a2 2 0 001.772 2.928h18.694A2 2 0 0023.119 20zM11 8.423a1 1 0 012 0v6a1 1 0 01-2 0v-6zm1.05 11.51h-.028a1.528 1.528 0 01-1.522-1.47 1.476 1.476 0 011.448-1.53h.028c.82.001 1.492.648 1.524 1.467a1.475 1.475 0 01-1.45 1.533z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgStatusWarning;
