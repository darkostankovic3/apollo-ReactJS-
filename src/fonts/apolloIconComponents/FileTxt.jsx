/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFileTxt(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M17.5 6h3.9a.25.25 0 00.177-.427L16.427.425A.25.25 0 0016 .6v3.9A1.5 1.5 0 0017.5 6z" />
        <path d="M21.75 7a.25.25 0 01.25.248V22a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h10.75a.25.25 0 01.25.248V4.5A2.5 2.5 0 0017.5 7h4.25zM7.128 17h1.001v-3.794h1.358v-.875H5.763v.875h1.365V17zm6.041 0h1.19l-1.694-2.401 1.589-2.268h-1.197L12 13.927l-1.071-1.596H9.746l1.589 2.275L9.641 17h1.183L12 15.292 13.169 17zm2.709 0h1.001v-3.794h1.358v-.875h-3.724v.875h1.365V17z" />
      </g>
    </svg>
  );
}

export default SvgFileTxt;
